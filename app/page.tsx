import About from "@/components/layouts/about/About"
import ExperienceList from "@/components/layouts/experience/ExperienceList"

export default function Home() {
	return (
		<div className="container flex flex-col items-center justify-between pt-24">
			<About />

			<div className="mt-20" id="experience">
				<ExperienceList />
				A</div>
		</div>
	)
}
