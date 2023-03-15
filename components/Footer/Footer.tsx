import Image from "next/image";
import React from "react";
import { Icon } from "../Icon/Icon";

interface Props {
  image: string;
  description: string;
  license: string;
  contents: {
    title: string;
    linkList: { link?: string; url: string; icon: string }[];
  }[];
}
export const Footer = (props: Props) => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 p-8 rounded-2xl w-full bg-[#537f91] items-center">
            <h1 className="text-3xl font-bold sm:text-4xl text-white">
              Unser Newsletter
            </h1>
            <div className="flex gap-2 flex-col sm:flex-row sm:ml-auto justify-end w-full">
              <input
                type="text"
                name="price"
                id="price"
                className="input-subs block w-full lg:w-1/2 rounded-md sm:text-base py-2 leading-6 border-gray-300 focus:border-sky-500 focus:ring-sky-600"
                placeholder="example@email.com"
              />
              <a
                href="#"
                className="block w-full sm:w-fit text-center rounded-md bg-sky-500 px-4 py-2 leading-6 text-base font-semibold text-white ring-1 ring-sky-500 hover:text-white hover:bg-sky-600 hover:ring-sky-600"
              >
                GetProject
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="divide-y bg-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-2/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <Image
                src={props.image}
                alt={"logo"}
                width={100}
                height={100}
                unoptimized
              />
            </a>
            <p className="mx-auto lg:ml-0 text-center lg:text-start max-w-xs my-4 text-gray-800">
              {props.description}
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-5 gap-y-8 lg:w-2/3 sm:justify-items-center lg:justify-items-end">
            {props.contents.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="mb-2 text-base text-black font-medium leading-5 tracking-wider uppercase inline-block border-b cursor-default">
                  {item.title}
                </h3>
                {item.title.toLowerCase() !== "social" && (
                  <ul className="space-y-1">
                    {item.linkList.map((item, index) => (
                      <li key={index}>
                        <a
                          className="text-base text-gray-800 hover:text-sky-500 "
                          href={item.url}
                        >
                          {item.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="space-y-3">
              <h3 className="mb-2 text-base text-black font-medium leading-5 tracking-wider uppercase inline-block border-b cursor-default">
                Social
              </h3>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href=""
                  title="Facebook"
                  className="flex items-center p-1 text-gray-800 hover:text-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href=""
                  title="Twitter"
                  className="flex items-center p-1 text-gray-800 hover:text-sky-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container grid sm:grid-cols-2 gap-5 py-6 justify-center sm:justify-between items-center">
          <div className="text-gray-800 cursor-default">{props.license}</div>
          <div className="flex flex-row flex-nowrap justify-center sm:justify-end">
            <a
              href="https://zingnews.vn/"
              className="text-gray-800 hover:text-sky-500"
            >
              Data protection
            </a>
            <span className="px-2">-</span>
            <a
              href="https://zingnews.vn/"
              className="text-gray-800 hover:text-sky-500"
            >
              Company
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
