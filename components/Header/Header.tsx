/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "../Icon/Icon";
import { Navbar } from "flowbite-react";
import { isInViewportById } from "../../utils/common";
import { useScrollspy } from "../../hooks";

interface Props {
  brand: {
    image: string;
    href: string;
  };
  group: { href: string; content: string }[];
}

export const Header = (props: Props) => {
  const ids = ["information", "service", "about", "pricing", "contact"];
  const activeId = useScrollspy(ids, 75);
  const [classSticky, setClassSticky] = useState("");

  //Sticky navbar
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setClassSticky("sticky-nav") : setClassSticky("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      stickNavbar();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        stickNavbar();
      });
    };
  }, []);

  return (
    <div className={`${classSticky} fixed top-0 left-0 w-full z-10`}>
      <div className="container mx-auto">
        <Navbar
          fluid={true}
          rounded={true}
          className="nav bg-transparent px-0 sm:px-0"
        >
          <Navbar.Brand href={props.brand.href}>
            <Image
              src={props.brand.image}
              alt={"logo"}
              width={80}
              height={100}
              unoptimized
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="bg-white shadow-lg md:shadow-none rounded-lg md:bg-transparent mt-4 md:mt-0">
            {props.group.map((item, index) => {
              return (
                <Navbar.Link
                  key={index}
                  href={item.href}
                  className={`md:hover:text-sky-500 ${
                    item.href.substring(1) === activeId && "text-sky-600"
                  }`}
                >
                  {item.content}
                </Navbar.Link>
              );
            })}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
