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
			<div className="basis-1/5 mt-1 text-xs font-semibold uppercase text-slate-600">{experience.date}</div>
			<div className="basis-4/5">
				<h3 className={`${styles.title} ${styles.lightTitle}  dark:hidden`}>
					{experience.title}
				</h3>
				<h3 className={`${styles.title}  ${styles.darkTitle} hidden dark:block`}>{experience.title}</h3>
				<div className="text-sm text-slate-600 mt-2">{experience.content}</div>
			</div>
		</div>
	)
}
