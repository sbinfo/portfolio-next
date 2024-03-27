"use client"
import type { IExperienceItem } from "@/store/index"
import { useExperienceStore } from "@/store/index"
import ExperienceItem from "./ExperienceItem"

export default function ExperienceList() {

	const { experienceList } = useExperienceStore()

	const mappedExperienceList = experienceList.map((item: IExperienceItem) => {
		return <ExperienceItem
			key={item.id}
			experience={item}
		/>
	})

	return (
		<div>
			{mappedExperienceList}
		</div>
	)
}
