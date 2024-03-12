import type { IExperienceItem } from "@/store"
import { ArrowUpRight } from "lucide-react"

interface IExperienceItemProps {
	experience: IExperienceItem
}

export default function ExperienceItem({ experience }: IExperienceItemProps) {
	return (
		<div className="mb-8 flex flex-row cursor-pointer bor">
			<div className="basis-1/5 mt-1 text-xs font-semibold uppercase text-slate-600">{experience.date}</div>
			<div className="basis-4/5">
				<h3 className="font-bold">
					<span>{experience.title} <ArrowUpRight color="black" size={20} className="ml-2" /></span>
				</h3>
				<div className="text-sm text-slate-600">{experience.content}</div>
			</div>
		</div>
	)
}
