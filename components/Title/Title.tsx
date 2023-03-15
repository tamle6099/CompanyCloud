import React from "react";
import { Icon } from "../Icon/Icon";

interface Props {
	title: string;
	content?: string;
	subContent?: [];
	buttonContent?: string;
	href?: string;
}

export const Title = ({ title, content, subContent, buttonContent, href }: Props) => {
	return (
		<>
			<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
			{content && (
				<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{content}</p>
			)}
			{subContent && (
				<div className="sub-content mt-2">
					<ul className="grid grid-cols-2 gap-y-2">
						{subContent?.map((item, index) => (
							<li key={index}>
								<Icon iconName="check-mark" size={15} /> {item}
							</li>
						))}
					</ul>
				</div>
			)}
			{buttonContent && (
				<div className="mt-8 flex gap-x-4 sm:justify-start">
					<a
						href={href}
						className="inline-block rounded-lg bg-sky-500 px-7 py-1.5 text-sm font-normal leading-7 text-white shadow-sm ring-1 ring-sky-500 hover:bg-sky-600 hover:ring-sky-600"
					>
						{buttonContent}
					</a>
				</div>
			)}
		</>
	);
};
