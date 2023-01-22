/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				'dark-gray': '#111827',
				whitish: '#FFFFF0',
				grey: '#ededed',
				'opaque-black': 'rgba(0,0,0,35)',
				'light-blue': '#136FFF',
				'vivid-pink': '#FF367F',
				'vivid-green': '#FFFF11',
			},
			backgroundImage: (theme) => ({
				'gradient-pink-purple':
					'linear-gradient(90deg, rgba(246,88,142,1) 14%, rgba(156,103,223,1) 47%, rgba(245,89,130,1) 78%)',
				'gradient-rainbow':
					'linear-gradient(81.66deg, #136FFF 7.21%, #FF367F 45.05%, #FFFF11 78.07%)',
			}),
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				opensans: ['Open Sans', 'sans-serif'],
				patric: ['Patrick Hand', 'cursive'],
				signature: ['Great Vibes', 'cursive'],
			},
			content: {
				brush: "url('./assets/brush.png')",
			},
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px',
		},
	},
	plugins: [],
};
