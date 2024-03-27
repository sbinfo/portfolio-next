"use client"
import Link from "next/link"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
	return (
		<div className="sticky top-0 pt-24">
			<h1 className="text-5xl font-bold text-secondary">Said B.</h1>
			<h3 className="text-xl font-bold mt-2">Frontend Engineer</h3>
			<div className="mt-2 max-w-80">Brings ideas to life with code! I build pixel-perfect, engaging, and accessible digital experiences.</div>

			<div className="pt-14 uppercase font-bold text-md">
				<ul className={styles.sidebarMenu}>

					<li>
						<Link href="#about">— About</Link>
					</li>
					<li><Link href="#experience">— Experience</Link></li>
					<li><Link href="#about">— Projects</Link></li>
					<li><Link href="#about">— Feed</Link></li>
					<li><Link href="#about">— Guestbook</Link></li>
				</ul>
			</div>
		</div>
	)
}
