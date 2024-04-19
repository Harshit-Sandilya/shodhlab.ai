import { getJobData } from './actions';
import styles from './jobs.module.css';

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const { status, data } = await getJobData(slug);

	return (
		<div className='w-full min-h-screen bg-black'>
			{status === 'ok' && data && (
				<div className='container flex flex-col justify-center w-3/4 gap-8 p-4 pt-24 mx-auto lg:w-2/3'>
					<div
						dangerouslySetInnerHTML={{ __html: data.contentHtml }}
						id='markdown-content'
						className={styles.markdown}
					/>
				</div>
			)}
		</div>
	);
}
