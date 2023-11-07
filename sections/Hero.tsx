"use client"

import Image from "next/image";
import Link from "next/link";
import utils from "../app/utils";

const Hero = () => {
  return (
    <section className="mx-auto flex w-[90%] max-w-[90rem] flex-col gap-14 pb-28 md:gap-40 md:pb-48">
      <h1 className="text-5xl font-medium md:text-8xl md:font-normal">
        Full-stack Web Developer.
      </h1>
      <div className="mx-auto flex max-w-[80%] flex-col gap-9 md:gap-20 lg:flex-row lg:gap-36">
        <Image
          src="https://storage.googleapis.com/dicoding-profile-app/profile-pic.png"
          alt=""
          className="h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96"
        />
        <div className="flex flex-col gap-5 md:gap-10">
          <p className="text-3xl md:text-5xl">Muhammad Helmi Hibatullah</p>
          <p className="text-gray-500 md:text-lg">
            An undergraduate student at the Computer Science/Informatics
            Institut Teknologi Bandung, who develops backend and frontend,
            sometimes does UI/UX design. A hard worker who likes to learn new
            things and take on challenges that require creativity, teamwork, and
            problem-solving skills.
          </p>
          <div className="mt-4 flex gap-4">
            <button
              className="max-w-fit rounded-[4px] bg-primary-40 px-6 py-3 text-white hover:bg-primary-50"
              onClick={utils.mailTo}
            >
              Hire me
            </button>
            <Link href="/about">
              <button className="max-w-fit rounded-[4px] border border-primary-40 px-6 py-3 text-primary-40 hover:border-primary-50 hover:bg-gray-100 hover:text-primary-50">
                About me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
