/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./Wrapper/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		// screens: {
		// 	xxl: { max: "1535px" },
		// 	xl: { max: "1279px" },
		// 	lg: { max: "1023px" },
		// 	md: { max: "767px" },
		// 	sm: { max: "576px" },
		// },
	},
	plugins: [require("flowbite/plugin")],
};
