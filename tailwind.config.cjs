const defaultTheme = require('tailwindcss/defaultTheme');

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
		},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
			display: ['Chapaza', ...defaultTheme.fontFamily.serif]
		}
	},
	plugins: []
};
