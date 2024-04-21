import { reviews } from "@/constants";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <section id="testimonies" className="py-10">
      <div className="max-w-7xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl font-spaceGrotesk">
              It&apos;s not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl ">
              Here&apos;s what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 ">
          {reviews.map((review) => (
            <div key={review.id} className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#020617] ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={review.image}
                        className="w-12 h-12 bg-center object-cover  border rounded-full"
                        alt={review.name}
                        width={48}
                        height={48}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {review.name}
                        </h3>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      {review.review}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
