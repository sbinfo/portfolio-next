import ExperienceList from "@/components/layouts/experience/ExperienceList"

export default function Home() {
	return (
		<div className="container flex min-h-screen flex-col items-center justify-between p-24">
			<div className="aboutMe">
				<p>I am a Front-end developer with 4 years of experience in commercial development.</p>
				<p>My expertise includes working with front-end technologies, especially with Vue.js and Nuxt.js, but I also have knowledge of React.js and Node.js.</p>
			</div>

			<div className="mt-24">
				<ExperienceList />
			</div>
		</div>
	)
}
