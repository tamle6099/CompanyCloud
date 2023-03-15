import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Title } from "../Title/Title";

interface Props {
  heading: {
    title: string;
    content?: string;
    subContent?: [];
    buttonContent?: "";
  };
  contents: {
    rate?: string;
    type: string;
    price: string;
    time?: string;
    endow: [];
    description?: string;
    buttonContent?: string;
    url?: string;
  }[];
}

export const Pricing = (props: Props) => {
  return (
    <Wrapper id="pricing" className="">
      <div className="sm:text-center max-w-4xl mx-auto">
        <Title
          title={props.heading.title}
          content={props.heading.content}
          subContent={props.heading.subContent}
          buttonContent={props.heading.buttonContent}
        />
      </div>

      <div className="mt-16 sm:mx-auto">
        <div className="grid max-w-md gap-12 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          {props.contents.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ${
                item.rate && "border-sky-500"
              }`}
            >
              {item.rate && (
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-sky-500">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="text-lg font-semibold">{item.type}</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">{item.price}</div>
                  {item.time && <div className="text-gray-700">/ mo</div>}
                </div>
                <div className="mt-2 space-y-3">
                  {item.endow.map((item, index) => (
                    <div key={index} className="text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <a
                  href={item.url}
                  className={`inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-normal tracking-wide text-white transition duration-200 rounded-lg ${
                    item.rate
                      ? "bg-sky-500 hover:bg-sky-600"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  {item.buttonContent}
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-left max-w-5xl mx-auto">
          <p className="text-normal leading-8 text-gray-600">
            * Without exception, all data is encrypted during transmission and
            storage and is thus always protected against unauthorized access.
          </p>
          <p className="text-normal leading-8 text-gray-600">
            For a surcharge, all services can be provided on an exclusive
            customer platform to be provided.
          </p>
          <p className="text-normal leading-8 text-gray-600">
            We are happy to set further requirements for you as part of an
            individual project around.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
