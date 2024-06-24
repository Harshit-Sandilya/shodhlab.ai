import { DsJobForm } from "components";

import { getJobData } from "../[slug]/actions";
import styles from "../[slug]/jobs.module.css";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { status, data } = await getJobData("ds-app");

  return (
    <div className="min-h-screen w-full bg-black py-8">
      {status === "ok" && data && (
        <div className="container mx-auto flex w-3/4 flex-col justify-center gap-8 p-4 pt-24 lg:w-2/3">
          <h1 className="255, 255, 0.38)] inline-block text-balance bg-gradient-to-br from-30% from-white to-[rgba(255, bg-clip-text font-medium text-4xl text-transparent leading-snug lg:text-6xl lg:leading-snug">
            {data.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: data.contentHtml,
            }}
            id="markdown-content"
            className={styles.markdown}
          />
          <DsJobForm />
        </div>
      )}
      {status !== "ok" && (
        <div className="container mx-auto flex w-3/4 flex-col justify-center gap-8 p-4 pt-24 lg:w-2/3">
          <h1 className="255, 255, 0.38)] inline-block text-balance bg-gradient-to-br from-30% from-white to-[rgba(255, bg-clip-text font-medium text-4xl text-transparent leading-snug lg:text-6xl lg:leading-snug">
            Error!
          </h1>
        </div>
      )}
    </div>
  );
}
