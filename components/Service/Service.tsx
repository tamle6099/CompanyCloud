import Image from "next/image";
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
		name: string;
		description: string;
		image: string;
		buttonContent?: string;
		url?: string;
	}[];
}

export const Service = (props: Props) => {
	return (
		<Wrapper id="service" className="">
			<div className="absolute inset-x-0 sm:left-80 top-[-10rem] -z-10 transform-gpu overflow-visible blur-3xl sm:top-[-5rem]">
				<svg
					className="relative left-[calc(50%-21rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[188deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
					fill="none"
				>
					<path
						fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
						fillOpacity=".3"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#0EA5E9" />
							<stop offset={1} stopColor="#fff" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<div className="sm:text-center max-w-4xl mx-auto">
				<Title
					title={props.heading.title}
					content={props.heading.content}
					subContent={props.heading.subContent}
					buttonContent={props.heading.buttonContent}
				/>
			</div>

			<div className="mt-16 sm:mx-auto">
				<div className="grid grid-cols-1 gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
					{props.contents.map((item, index) => (
						<div key={index} className="flex">
							<div className="mr-4">
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
									<svg
										className="w-8 h-8 text-deep-purple-accent-400"
										stroke="currentColor"
										viewBox="0 0 52 52"
									>
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h6 className="text-lg font-semibold leading-8 text-gray-900">{item.name}</h6>
								<p className="mt-2 text-base leading-7 text-gray-600">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Wrapper>
	);
};
