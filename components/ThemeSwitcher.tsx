"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])


	if (!mounted) {
		return null
	}

	const switcherIcon = theme === "light" ? <Moon color="black" size={26} /> : <Sun color="white" size={26} />

	return (
		<button
			className={`w-fit absolute left-0 top-7 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{switcherIcon}
		</button>
	)
}
