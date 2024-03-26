import Navbar from "@/components/navbar";
import data from "@/data/models.json";
import Image from "next/image";

export default function Models() {
  return (
    <>
      <Navbar />
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            {/* Grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-4">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  {data.models[0].pageHead}
                </h2>
                <p className="text-gray-500">{data.models[0].pageSubHead}</p>
              </div>
              {/* End Title */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Tab Nav */}
        <nav
          className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4"
          aria-label="Tabs"
          role="tablist"
        >
          {data.models[0].features.map((feature) => (
            <button
              key={feature.id}
              type="button"
              className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <svg
                className="flex-shrink-0 hidden sm:block size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              <span className="mt-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  {feature.head}
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  {feature.description}
                </span>
              </span>
            </button>
          ))}
        </nav>
        {/* End Tab Nav */}
        {/* Tab Content */}
        <div className="mt-12 md:mt-16">
          {data.models[0].features.map((feature) => (
            <div
              key={feature.id}
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-1"
            >
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={feature.imageWidth}
                height={feature.imageHeight}
              />
            </div>
          ))}
        </div>
        {/* End Tab Content */}
      </div>
      {/* End Features */}
    </>
  );
}
