module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'bg-lg': "url('./images/bg-intro-desktop.svg')",
				'bg-sm': "url('./images/bg-intro-mobile.svg')",
				'bg-phones': "url('./images/image-mockups.png')"
			}),
			fontFamily: {
				Publicsans: [ 'Public+Sans' ]
			},
			colors: {
				'primary-light': '#fafafa',
				'primary-dark': '#f4f5f7',
				'lime-green': 'hsl(136, 65%, 51%)',
				'bright-cyan': 'hsl(192, 70%, 51%)',
				navy: ' hsl(233, 26%, 24%)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
