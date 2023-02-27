/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: '#101010',
				'dark-800': '#282828',
				'dark-900': '#141414'
			}
		}
	},
	plugins: []
};
