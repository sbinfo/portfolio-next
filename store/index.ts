import { create } from "zustand"

export type IExperienceItem = {
	id: string
	date: string
	title: string
	link: string
	stack: Array<string>
	content: string
}

type Store = {
	experienceList: Array<IExperienceItem>
}

export const useExperienceStore = create<Store>()(() => ({
	experienceList: [
		{
			id: "1",
			date: "2021 — 2023",
			title: "Lead Frontend Developer - Ari Company",
			link: "https://ari.company/",
			stack: ["Vue", "Nuxt.js", "Vuetify", "SCSS", "Rest API"],
			content:
				"I was a leading developer in the development of a marketplace (https://leedex.eu/)",
		},
		{
			id: "2",
			date: "2021 — 2021",
			title: "Frontend Developer - Zoiex Technologies",
			link: "https://zoiex.com/",
			stack: ["Vue", "Nuxt.js", "Vuetify", "SCSS", "Rest API"],
			content:
				"I have developed a pwa application for auto trading. Using stack: Vue.js, Vuetify,Vuex, VueRouter,Firebase, PWA, WebAuth, Pug, sass/scss, Gitlab, Trello etc. I also completely developed the admin panel for this application with complex charts and\ncalculators for trading",
		},
		{
			id: "3",
			date: "2020 — 2021",
			title: "Frontend Developer - Filancy Marketing",
			link: "https://filancy.com/",
			stack: ["Vue", "Nuxt.js", "Vuetify", "SCSS", "Rest API"],
			content:
				"Development and support of web applications on Vue.js / Nuxt.js. Designed from scratch (Html/css/jquery) a website for searching for air tickets. Website in two\nlanguages (English and Hebrew).",
		},
		{
			id: "4",
			date: "2018 — 2019",
			title: "Web Developer - FluidWeb",
			link: "https://fluidweb.io/",
			stack: ["Vue", "Nuxt.js", "Vuetify", "SCSS", "Rest API"],
			content:
				"Creation of sites on Wordpress / Support / transfer, domain connection, hosting settings Functional improvements and bug fixes, Website adaptation for mobile devices Adding new features (using JS/jQuery)",
		},
	],
}))
