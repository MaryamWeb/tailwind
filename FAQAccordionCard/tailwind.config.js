/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [ './src/**/*.{html,js}' ],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'bg-desktop': "url('./images/bg-pattern-desktop.svg')",
				'bg-mobile': "url('./images/bg-pattern-mobile.svg')",
				'woman-desktop': "url('./images/illustration-woman-online-desktop.svg')",
				'woman-mobile': "url('./images/illustration-woman-online-mobile.svg')"
			}),
			fontFamily: {
				'Kumbh-Sans': [ 'Kumbh Sans' ]
			},
			colors: {
				'soft-red': 'hsl(14, 88%, 65%)',
				'soft-violet': ' hsl(273, 75%, 66%)',
				'soft-blue': 'hsl(240, 73%, 65%)',
				'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
				'light-grayish-blue': 'hsl(240, 5%, 91%)',
				'dark-grayishblue': 'hsl(240, 6%, 50%)',
				'very-dark-grayish-blue': 'hsl(237, 12%, 33%)'
			}
		}
	},
	plugins: []
};
