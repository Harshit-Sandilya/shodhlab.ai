import Navbar from "@/components/navbar";
import data from "@/data/blog.json";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {data.Heading}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {data.Text}
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.blogs.map((blog) => (
            <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.2]"
            href="#"
            key={blog.id}
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {blog.Title}
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          ))}
        </div>
        {/* End Grid */}
      </div>
    </>
  );
}
