/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	darkMode: 'class',
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				whitish: '#FFFFF0',
				grey: '#ededed',
				purple: '#9057FF',
				'bluish-black': '#111827',
				'opaque-black': 'rgba(0,0,0,35)',
				'light-blue': '#136FFF',
				'vivid-pink': '#FF367F',
				'vivid-yellow': '#FFFF11',
				'mint-green': '#85FFBD',
			},
			backgroundImage: (theme) => ({
				'gradient-night-sky':
					'linear-gradient(to bottom, #5433ff, #20bdff, #a5fecb)',
				'gradient-day-sky':
					'linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080)',
				'gradient-purple-pink-orange':
					'linear-gradient(331deg, #4e6cf9 0%, #d664cc 46%, #FFCC70 100%)',
				'gradient-pink-orange':
					'linear-gradient(32deg, #FBDA61 0%, #FF5ACD 100%)',
				'gradient-rainbow':
					'linear-gradient(90deg, rgba(255,255,17,1) 17%, rgba(255,54,127,1) 46%, rgba(19,111,255,1) 91%)',
			}),
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				opensans: ['Open Sans', 'sans-serif'],
				patric: ['Patrick Hand', 'cursive'],
				signature: ['Great Vibes', 'cursive'],
				solitreo: ['Solitreo', 'cursive'],
				jp: ['Kiwi Maru', 'serif'],
			},
			content: {
				brush: "url('./assets/brush.png')",
				brush_xs: "url('./assets/brush_xs.png')",
			},
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px',
		},
		animation: {
			wiggle: 'wiggle 8s ease-in-out infinite',
		},
		keyframes: {
			wiggle: {
				'0%, 100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
				'50%': { 'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%' },
			},
		},
	},
	plugins: [],
};
