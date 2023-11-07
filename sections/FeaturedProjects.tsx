"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const FeaturedProjects = ({ projects }: any) => {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideNumber, setSlideNumber] = useState(1);
  // console.log(projects)

  const nextSlide = () => {
    if (!slideRef.current) return;

    // scroll slide-container to the right by slide width
    slideContainerRef.current?.scrollBy({
      left: slideRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (!slideRef.current) return;
    if (!slideContainerRef.current) return;

    // if slide right, increase slide number
    if (
      slideContainerRef.current?.scrollLeft >
      slideRef.current?.offsetWidth * (slideNumber - 1) +
        slideRef.current?.offsetWidth / 2
    ) {
      setSlideNumber(slideNumber + 1);
    }
    // if slide left, decrease slide number
    if (
      slideContainerRef.current?.scrollLeft <
      slideRef.current?.offsetWidth * (slideNumber - 1) -
        slideRef.current?.offsetWidth / 2
    ) {
      setSlideNumber(slideNumber - 1);
    }
  };

  const prevSlide = () => {
    if (!slideRef.current) return;
    // scroll slide-container to the left by slide width
    slideContainerRef.current?.scrollBy({
      left: -slideRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-surface pt-20">
      <div className="mx-auto flex w-[90%] max-w-[90rem] flex-col gap-14 pb-16 md:gap-20 md:pb-36">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl">
            Featured Projects
          </h1>
          <div className="flex items-end">
            <div className="flex w-40 items-center justify-between">
              <button
                role="button"
                className="rounded-full px-2 py-2 text-black hover:bg-gray-200"
                aria-label="prev"
                onClick={prevSlide}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <p className="text-lg md:text-xl">
                {slideNumber}/{projects.length}
              </p>
              <button
                role="button"
                className="rounded-full px-2 py-2 text-black hover:bg-gray-200"
                aria-label="next"
                onClick={nextSlide}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Card */}
          <div
            ref={slideContainerRef}
            className="flex h-full snap-x snap-mandatory gap-5 overflow-hidden overflow-x-auto scroll-smooth scrollbar-hide md:gap-8"
            onScroll={onScroll}
          >
            {projects.map((project: any, index: number) => (
              <div
                className="flex w-[70%] flex-shrink-0 snap-center flex-col gap-4 overflow-hidden md:snap-start lg:w-[40%]"
                ref={slideRef}
                key={index}
              >
                <Image
                  className="aspect-video w-full rounded-md object-cover"
                  src={project.cover.file?.url || project.cover.external?.url}
                  alt={project.properties.Name.title[0].plain_text}
                  width="800"
                  height="450"
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkyA6pBwACcgFATql5rgAAAABJRU5ErkJggg=="
                />
                <div className="flex h-full flex-col justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl md:text-3xl">
                      {project.properties.Name.title[0].plain_text}
                    </p>
                    <p className="md:text-normal text-sm text-gray-500">
                      {project.properties.Summary.rich_text[0].plain_text}
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="flex w-full flex-row flex-wrap gap-2">
                      {project.properties[
                        "Tools & Technology"
                      ].multi_select.map((tag: any, index: number) => (
                        <p
                          className="rounded bg-[#DBE5DF] px-2 py-1 text-xs text-primary-40"
                          key={index}
                        >
                          {tag.name}
                        </p>
                      ))}
                    </div>
                    <button className="mt-8 max-w-fit rounded-[4px] border border-primary-40 px-6 py-3 text-sm text-primary-40 hover:border-primary-50 hover:bg-gray-100 hover:text-primary-50">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href="/projects" className="text-xl md:text-2xl">
          See more projects {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 inline text-primary-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
