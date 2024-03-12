import type { IExperienceItem } from "@/store"

interface IExperienceItemProps {
	experience: IExperienceItem
}

export default function ExperienceItem({ experience }: IExperienceItemProps) {
	return (
		<div className="mb-8">
			<div>{experience.date}</div>
			<div>
				<h3>{experience.title}</h3>
				<div>{experience.content}</div>
			</div>
		</div>
	)
}
