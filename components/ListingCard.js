import Link from "next/link";

export default function ListingCard({ title, short_desc, category, img, slug }) {
  return (
    <div class="w-full bg-white border border-gray-300 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link href={"/listing/" + slug}>
                    <img
                      class="rounded-t-lg"
                      src={img}
                      alt=""
                    />
                  </Link>
                  <div class="p-5">
                    <div class="mb-4">
                      <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {category}
                      </span>
                    </div>
                    <div>
                      <Link href={"/listing/" + slug}>
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {title}
                        </h5>
                      </Link>
                    </div>
                    <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-justify">
                      {short_desc}
                    </p>
                    <button class="w-full flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                      <span class="mr-4">Add to cart</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </span>
                    </button>
                    <div class="border-b-2 border-gray-300 mt-3 mb-5"></div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <img
                          class="w-12 h-12 rounded-full"
                          src="https://uplive-co.vercel.app/assets/img/trainers/trainer-1.jpg"
                          alt="Rounded avatar"
                        />
                        <span class="ml-4 text-md font-medium">Danni</span>
                      </div>

                      <div class="flex items-center">
                        <span class="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <span class="mr-5">50</span>

                        <span class="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </span>
                        <span>50</span>
                      </div>
                    </div>
                  </div>
                </div>
  )
}