/** @type {import("tailwindcss").Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
            fontFamily: {
                
            },
			colors: {
				text: 'hsl(var(--text) / <alpha-value>)',
				bg_1: 'hsl(var(--bg_1) / <alpha-value>)',
				bg_2: 'hsl(var(--bg_2) / <alpha-value>)',
				primary: 'hsl(var(--primary) / <alpha-value>)',
				secondary: 'hsl(var(--secondary) / <alpha-value>)',
				accent: 'hsl(var(--accent) / <alpha-value>)',
			},
		},
	},
	plugins: [],
};
