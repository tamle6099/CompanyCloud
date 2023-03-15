import Image from "next/image";
import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Icon } from "../Icon/Icon";
import { Title } from "../Title/Title";
import Lottie from "react-lottie";
import * as animationData from "../../public/images/mail.json";

interface Props {
	image: string;
	heading: {
		title: string;
		content?: string;
		subContent?: [];
		buttonContent?: "";
	};
	contents: {
		form: {
			element?: string;
			name: string;
			placeholder: string;
		}[];
		buttonContent: string;
		infoContact: {
			icon: string;
			name: string;
			description: string;
		}[];
	};
}

export const Contact = (props: Props) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Wrapper id="contact" className="">
			<div className="grid lg:grid-cols-2 items-center">
				<div className="relative pb-12 mx-auto lg:ml-0 lg:pr-4 lg:py-0 images">
					<Lottie options={defaultOptions} height={"100%"} width={"100%"} />
				</div>
				<div className="mx-auto lg:mr-0 pl-0 lg:pl-4">
					<div className="mb-8 text-start max-w-xl">
						<Title
							title={props.heading.title}
							content={props.heading.content}
							subContent={props.heading.subContent}
							buttonContent={props.heading.buttonContent}
						/>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<form action="#" method="POST">
							<div className="">
								<div className="grid grid-cols-6 gap-6">
									{props.contents.form.map((item, index) => (
										<div
											key={index}
											className={`col-span-6 ${item.element === "input" && "sm:col-span-3"}`}
										>
											<label
												htmlFor={item.name}
												className="block text-sm font-medium text-gray-700"
											>
												{item.name}
											</label>
											{item.element === "input" ? (
												<input
													type="text"
													name={item.name}
													id={item.name}
													placeholder={item.placeholder}
													className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
												/>
											) : (
												<div className="mt-1">
													<textarea
														id={item.name}
														name={item.name}
														rows={3}
														className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
														placeholder={item.placeholder}
														defaultValue={""}
													/>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
							<div className="text-right">
								<button
									type="submit"
									className="mt-6 inline-block rounded-lg bg-sky-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-500 hover:bg-sky-600 hover:ring-sky-600"
								>
									{props.contents.buttonContent}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="pt-12 mx-auto lg:pt-24">
				<div className="grid gap-5 row-gap-5 sm:grid-cols-3">
					{props.contents.infoContact.map((item, index) => (
						<div key={index} className="px-12 text-center sm:px-0">
							<div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-12 sm:h-12">
								<Icon iconName={item.icon} size={50} />
							</div>
							<h6 className="mb-2 text-md font-bold leading-5 tracking-wider uppercase">
								{item.name}
							</h6>
							<div className="mb-2 text-gray-700 mx-auto max-w-xs">{item.description}</div>
						</div>
					))}
				</div>
			</div>
		</Wrapper>
	);
};
