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

export const Information = (props: Props) => {
	return (
		<Wrapper id="information" className="">
			<div className="sm:text-center max-w-4xl mx-auto">
				<Title
					title={props.heading.title}
					content={props.heading.content}
					subContent={props.heading.subContent}
					buttonContent={props.heading.buttonContent}
				/>
			</div>

			<div className="mt-36 sm:mx-auto">
				<div className="grid grid-cols-1 gap-y-36 xs:grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-36 lg:grid-cols-3 lg:gap-12">
					{props.contents.map((content, index) => (
						<div
							key={index}
							className="info-card relative flex flex-col gap-6 items-center text-center shadow-lg rounded-lg"
						>
							<div className="info-image flex h-full w-full items-center justify-center">
								<Image src={content.image} alt="" height={0} width={200} />
							</div>
							<div className="isolate relative sm:min-w-0 sm:flex-1 p-10 pt-28">
								<p className="text-lg font-semibold leading-8 text-gray-900">{content.name}</p>
								<p className="mt-2 mb-9 text-base leading-7 text-gray-600">{content.description}</p>
								<div className="absolute bottom-8 left-0 w-full mt-4 flex-shrink-0">
									<a href={content.url} className="font-normal text-sky-500 hover:text-sky-600">
										{content.buttonContent}{" "}
										<svg
											aria-hidden="true"
											className="inline-block w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Wrapper>
	);
};
