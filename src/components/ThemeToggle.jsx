import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
export default function ThemeToggle() {
	// Get the theme from local storage or use the default
	const savedTheme = localStorage.getItem("theme");
	const initialTheme = savedTheme || "light";

	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	const handleThemeToggle = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", newTheme);
		setCurrentTheme(newTheme);

		// Save the theme to local storage
		localStorage.setItem("theme", newTheme);
	};

	// Set the initial theme when the component mounts
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", initialTheme);
	}, [initialTheme]);

	return (
		<button
			onClick={handleThemeToggle}
			className='whitespace-nowrap flex gap-4 transition-colors duration-300 hover:text-accent p-1'>
			<div className='w-8 h-6 text-2xl'>
				<Icon icon='fluent:dark-theme-20-filled' />
			</div>
			<div className='w-full'>theme</div>
		</button>
	);
}
