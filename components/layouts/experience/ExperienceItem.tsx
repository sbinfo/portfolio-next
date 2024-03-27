import type { IExperienceItem } from "@/store"
import styles from "./ExperienceItem.module.css"

interface IExperienceItemProps {
	experience: IExperienceItem
}

export default function ExperienceItem({ experience }: IExperienceItemProps) {

	const openLink = () => {
		window.open(experience.link, "_blank")
	}

	return (
		<div className={styles.experienceItem} onClick={openLink}>
			<div className="basis-1/5 mt-1 text-xs font-semibold uppercase text-slate-600 dark:text-slate-500 text-secondary">
				<span>{experience.date}</span>
			</div>
			<div className="basis-4/5">
				<h3 className={`${styles.title} font-bold text-heading`}>
					{experience.title}
				</h3>
				<div className="text-sm text-slate-600 dark:text-slate-500 mt-2">
					{experience.content}
				</div>
				<div className={styles.technologies}>
					{
						experience.stack.map((item, index) => <span key={index}>{item}</span>)
					}
				</div>
			</div>
		</div>
	)
}
