import Navbar from "@/components/navbar";
import data from "@/data/blog.json";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <>
        {/* Blog Article */}
        <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            {/* Content */}
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3 flex flex-row justify-between items-center">
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                  {data.blogs[0].Title}
                </h2>
                <ul className="text-xs text-gray-500">
                  <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                    Jan 18
                  </li>
                  <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                    8 min read
                  </li>
                </ul>
              </div>
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Image Description"
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                  A woman sitting at a table.
                </figcaption>
              </figure>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Have you ever woken up on a crisp Saturday morning, stomach
                grumbling for a delightful breakfast, only to discover a crucial
                ingredient missing? This is the tale of my encounter with the
                vanishing marmalade, a breakfast odyssey filled with unexpected
                twists and a sprinkle of suspense. The morning sun cast a golden
                glow across the kitchen counter, illuminating a basket
                overflowing with fluffy bread rolls. Visions of golden toast
                slathered in tangy marmalade danced in my head. But alas, when I
                reached for the jar, my hand met only empty space. Panic surged
                through me like an overproof espresso. Had I dreamt of buying
                marmalade? Had gremlins raided the pantry in the dead of night?
                Determined to solve the Marmalade Mystery, I embarked on a
                breakfast-fueled investigation. First, I interrogated the
                fridge, its shelves lined with milk, cheese, and a
                suspicious-looking jar of olives. Alas, no marmalade in sight.
                Next, I braved the labyrinthine cupboards, navigating past
                forgotten boxes of cereal and dusty tins of spices. Still, the
                elusive marmalade remained unfound. Just as despair threatened
                to consume me, a flicker of orange caught my eye. Nestled behind
                a forgotten bag of flour in the back corner of the pantry, stood
                the missing jar! Relief washed over me like a warm cup of tea.
                The mystery was solved, the breakfast crisis averted. But the
                question lingered: how did the marmalade end up in such a
                peculiar hiding spot? Perhaps it was a mischievous houseplant
                seeking a sugary snack. Maybe a sleepwalking breakfast bandit
                had misplaced it in the dead of night. The world may never know.
                This incident serves as a reminder: even the most mundane
                routines can hold unexpected adventures. So next time you reach
                for your favorite breakfast spread, take a moment to appreciate
                its presence. You never know when a marmalade mystery might
                unfold.
              </p>
              <div>
                <a
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Plan
                </a>
                <a
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Web development
                </a>
                <a
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Free
                </a>
                <a
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Team
                </a>
              </div>
            </div>
            {/* End Content */}
          </div>
        </div>
        {/* End Blog Article */}
        {/* Sticky Share Group */}
        <div className="sticky bottom-6 inset-x-0 text-center">
          <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
            <div className="flex items-center gap-x-1.5">
              {/* Button */}
              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  875
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                    role="tooltip"
                  >
                    Like
                  </span>
                </button>
              </div>
              {/* Button */}
              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600" />
              {/* Button */}
              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                  16
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                    role="tooltip"
                  >
                    Comment
                  </span>
                </button>
              </div>
              {/* Button */}
              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600" />
              {/* Button */}
              <div className="hs-dropdown relative inline-flex">
                <button
                  type="button"
                  id="blog-article-share-dropdown"
                  className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1={12} x2={12} y1={2} y2={15} />
                  </svg>
                  Share
                </button>
              </div>
              {/* Button */}
            </div>
          </div>
        </div>
        {/* End Sticky Share Group */}
      </>
    </>
  );
}
