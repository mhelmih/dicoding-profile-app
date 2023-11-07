"use client";

import utils from "../app/utils";

const LastCta = () => {
  return (
    <section className="mx-auto flex w-[90%] max-w-[90rem] py-28">
      <div className="flex w-full flex-col items-center justify-between gap-y-10 md:flex-row">
        <div className="flex-none">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl">
            Interested to work with me?
          </h1>
        </div>
        <div className="w-full md:flex md:justify-center">
          <button
            className="max-w-fit rounded-[4px] bg-primary-40 px-14 py-3 text-white hover:bg-primary-50"
            onClick={utils.mailTo}
          >
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastCta;
