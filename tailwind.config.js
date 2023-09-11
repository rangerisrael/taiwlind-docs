/** @type {import('tailwindcss').Config} */
export default {
	content: ['./**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'linear-gradient(to left bottom, #00dff4, #82e4ff, #c0eaff, #e9f2ff, #ffffff)',
			},
		},
	},
	plugins: [],
};

