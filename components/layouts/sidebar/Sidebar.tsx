import styles from "./Sidebar.module.css"

export default function Sidebar() {
	return (
		<div className="sticky top-0 pt-24">
			<h1 className="text-5xl font-bold">Said Babaiev</h1>
			<h3 className="text-xl font-bold mt-2">Frontend Engineer</h3>
			<div className="mt-2 max-w-80">Brings ideas to life with code! I build pixel-perfect, engaging, and accessible digital experiences.</div>

			<div className="pt-24 uppercase font-bold text-md">
				<ul className={styles.sidebarMenu}>
					<li>— About</li>
					<li>— Experience</li>
					<li>— Projects</li>
				</ul>
			</div>
		</div>
	)
}
