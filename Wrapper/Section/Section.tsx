/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import clsx from "clsx";

type VariantColor = "white" | "black";

interface Props {
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variantColor?: VariantColor;
  id?: string;
}

export const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, className, style, variantColor, id, ...innerProps }, ref) => {
    return (
      <div
        id={id}
        ref={ref}
        className={clsx(
          id,
          variantColor === "white" &&
            "bg-white text-black px-[2rem] py-[10rem]",
          variantColor === "black" &&
            "bg-black text-white px-[2rem] py-[10rem]",
          className,
          style,
          { ...innerProps }
        )}
      >
        {children}
      </div>
    );
  }
);
