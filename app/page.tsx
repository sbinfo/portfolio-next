import ExperienceList from "@/components/layouts/experience/ExperienceList"

export default function Home() {
	return (
		<div className="container flex flex-col items-center justify-between pt-24">
			<div>
				<p>I am a Front-end developer with 4 years of experience in commercial development.</p>
				<p>My expertise includes working with front-end technologies, especially with Vue.js and Nuxt.js, but I also have knowledge of React.js and Node.js.</p>
			</div>

			<div className="mt-20">
				<ExperienceList />
			</div>
		</div>
	)
}
