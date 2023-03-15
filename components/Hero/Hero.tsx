import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/images/img-banner.json";

interface Props {
	title: string;
	title2: string;
	content: string;
	buttonContent: string;
	image: string;
	href?: string;
}

export const Hero = (props: Props) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div id="home" className="isolate bg-white">
			<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<svg
					className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
			<main>
				<div className="relative">
					<div className="container pb-0 mx-auto pt-32 sm:pt-28 md:py-24">
						<div className="grid grid-cols-1 items-start md:grid-cols-2">
							<div className="hero-content self-center lg:pr-8 ">
								<h1 className="text-4xl font-bold tracking-tight sm:text-start sm:text-3xl lg:text-4xl xl:text-6xl">
									{props.title} <br />
									{props.title2}
								</h1>
								<p className="mt-6 text-md lg:text-lg leading-8 text-gray-600 sm:text-start">
									{props.content}
								</p>
								<div className="mt-8 flex gap-x-4 sm:justify-start">
									<a
										href={props.href}
										className="inline-block rounded-lg bg-sky-500 px-7 py-1.5 text-sm font-normal leading-7 text-white shadow-sm ring-1 ring-sky-500 hover:bg-sky-600 hover:ring-sky-600"
									>
										{props.buttonContent}
									</a>
								</div>
							</div>
							<div className="relative isolate w-full img-hero mt-16 sm:m-0">
								<Lottie options={defaultOptions} height={"100%"} width={"100%"} />
							</div>
						</div>
						<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
							<svg
								className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
								viewBox="0 0 1155 678"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
									fillOpacity=".3"
									d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
								/>
								<defs>
									<linearGradient
										id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
					</div>
				</div>
			</main>
		</div>
	);
};
