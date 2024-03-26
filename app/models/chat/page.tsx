import Navbar from "@/components/navbar";
import data from "@/data/models.json";
import Image from "next/image";

export default function Models() {
  return (
    <>
      <Navbar />
      {/* Content */}
      <div className="relative h-screen">
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Model : {data.models[0].name}
            </h1>
          </div>
          {/* End Title */}
          <ul className="mt-16 space-y-5">
            {data.models[0].chat.map((chat, chatIndex) => {
              if (chat.from === "model") {
                return (
                  <li className="flex gap-x-2 sm:gap-x-4" key={chatIndex}>
                    <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                      <span className="text-sm font-medium text-white leading-none">
                        A
                      </span>
                    </span>
                    {/* Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700 text-gray-800 dark:text-white text-sm">
                      {chat.text}
                    </div>
                    {/* End Card */}
                  </li>
                );
              } else {
                return (
                  <li
                    className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4"
                    key={chatIndex}
                  >
                    <div className="grow text-end space-y-3">
                      {/* Card */}
                      <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-white">{chat.text}</p>
                      </div>
                      {/* End Card */}
                    </div>
                    <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                      <span className="text-sm font-medium text-white leading-none">
                        U
                      </span>
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        {/* Search */}
        <footer className="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-slate-900 dark:border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <button
              type="button"
              className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              New chat
            </button>
            <button
              type="button"
              className="py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <svg
                className="flex-shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
              </svg>
              Stop generating
            </button>
          </div>
          {/* Input */}
          <div className="flex flex-row items-center justify-evenly">
            <div className="relative w-[90%]">
              <textarea
                className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Ask me anything..."
                defaultValue={""}
              />
            </div>
            {/* Send Button */}
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </button>
            {/* End Send Button */}
          </div>
          {/* End Input */}
        </footer>
        {/* End Search */}
      </div>
      {/* End Content */}
    </>
  );
}
