/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'custom-color': '#000000',
				'custom-color2':'#2e2e2e',
				'custom-text': '#dcddde'
			},
		},
	},
	plugins: [],
}
