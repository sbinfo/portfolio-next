import type { Config } from "tailwindcss"
import { COLORS } from "./constants/colors.constants"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		colors: COLORS,
		extend: {},
	},
	plugins: [],
}
export default config
