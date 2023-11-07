"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const socialMediaRoutes = [
  {
    name: "Github",
    path: "https://github.com/mhelmih",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[36px] w-[36px] fill-current text-gray-500 transition-colors duration-200 hover:text-black"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/mhelmih/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-[24px] w-[24px] fill-current text-neutral-500 transition-colors duration-200 hover:text-black"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
];

interface Props {
  routes: { name: string; path: string; current: boolean }[];
}
const Navbar = ({ routes }: Props): JSX.Element => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 h-[60px] w-full bg-white bg-opacity-95"
    >
      {({ open }) => (
        <>
          <div className="relative mx-auto h-full w-[90%] max-w-[90rem]">
            <div className="flex h-full w-full items-center justify-between">
              <div className="flex h-full items-center">
                <div className="flex-shrink-0 md:mr-16 lg:mr-32">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="logo"
                      className="h-[36px] w-[36px]"
                    />
                  </Link>
                </div>
                <div className="hidden h-full md:block">
                  <div className="flex h-full md:gap-8 lg:gap-12">
                    {routes.map((item) => (
                      <Link
                        href={item.path}
                        key={item.name}
                        className={`mt-1 flex items-center px-2 hover:rounded-t-md hover:bg-gray-200 ${
                          item.current
                            ? "border-b-4 border-black text-black"
                            : "mb-1 text-gray-500 hover:mb-0 hover:border-b-4 hover:border-gray-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden items-center gap-6 md:flex md:gap-8 lg:gap-10">
                {socialMediaRoutes.map((item) => (
                  <Link
                    href={item.path}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={item.name}
                    className="text-gray-500 transition-colors duration-200 hover:text-black"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>

              <div className=" flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-black focus:text-black">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-white bg-opacity-95 md:hidden">
            <div className="mx-auto w-[90%]">
              <div className="flex flex-col gap-3 pb-3 pt-7">
                {routes.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`
                      px-4 py-3 hover:bg-gray-200 ${
                        item.current
                          ? "border-l-4 border-black text-black"
                          : "ml-1 text-gray-500"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-8 border-t-2 p-5">
                {socialMediaRoutes.map((item) => (
                  <Link
                    href={item.path}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={item.name}
                    className="text-gray-500 transition-colors duration-200 hover:text-black"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
