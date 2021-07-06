module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				hero: "url('./images/bg-pattern-desktop.svg')",
				'desktop-right': "url('./images/hero-desktop.jpg')"
			}),
			fontFamily: {
				body: [ 'Josefin+Sans' ]
			},
			colors: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)'
			},
			letterSpacing: {
				heading: '0.2em'
			},
			flex: {
				'6': '0 0 60%'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
