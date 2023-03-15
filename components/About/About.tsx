import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Title } from "../Title/Title";

interface Props {
	heading: {
		title: string;
		content?: string;
		subContent?: [];
		buttonContent?: string;
	};
	contents: {
		amount: string;
		name: string;
	}[];
	href?: string;
}

export const About = (props: Props) => {
	return (
		<Wrapper id="about" className="">
			<div className="grid lg:grid-cols-2 items-center">
				<div className="text-start max-w-xl">
					<Title
						title={props.heading.title}
						content={props.heading.content}
						subContent={props.heading.subContent}
						buttonContent={props.heading.buttonContent}
						href={props.href}
					/>
				</div>
				<div className="relative px-4 pt-12 md:pt-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-24 lg:p-8">
					<div className="absolute inset-x-0 top-0 items-center justify-center hidden md:flex md:inset-y-0">
						<svg viewBox="0 0 88 88" className="w-full max-w-screen-xl text-indigo-100">
							<circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="15.5" />
							<circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
							<circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
							<circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
							<circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
						</svg>
					</div>
					<div className="relative grid gap-5 sm:grid-cols-2">
						{props.contents.map((content, index) => (
							<div
								key={index}
								className="flex flex-col justify-between text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
							>
								<div className="p-10 text-center">
									<p className="mb-2 font-medium text-5xl text-sky-500">{content.amount}+</p>
									<p className="text-lg leading-5 text-gray-900 capitalize">{content.name}</p>
								</div>
								<div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							</div>
						))}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
