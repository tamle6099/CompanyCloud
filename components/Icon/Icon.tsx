import React from "react";
import clsx from "clsx";

type IconName =
	| "burger-menu"
	| "close-menu"
	| "check-mark"
	| "location"
	| "envelope"
	| "telephone"
	| "facebook"
	| "twitter"
	| "instagram";

interface Props {
	iconName: IconName | string;
	size?: number;
	clickable?: boolean;
	onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
	className?: string;
}

export const Icon: React.FC<Props> = ({ iconName, size, clickable, onClick, className }) => (
	<span
		className={clsx("a-icon", `a-icon-${iconName}`, clickable && "a-icon-clickable", className)}
		style={{ width: size, height: size }}
		aria-hidden
		onClick={clickable ? onClick : undefined}
	/>
);

Icon.defaultProps = { size: 24 };
