module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				wallpaper: "url('./images/bg-pattern-desktop.svg')",
				'desktop-hero': "url('./images/hero-desktop.jpg')",
				'mobile-hero': "url('./images/hero-mobile.jpg')",
				'gradient-135-deg': 'linear-gradient(130deg, var(--tw-gradient-stops))'
			}),
			fontFamily: {
				body: [ 'Josefin+Sans' ]
			},
			colors: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)',
				'button-gradient-light': 'hsl(0, 80%, 86%)',
				'button-gradient-darker': 'hsl(0, 74%, 74%)'
			},
			letterSpacing: {
				heading: '0.2em'
			},
			flex: {
				'6': '0 0 60%',
				'5': '0 0 50%'
			},
			boxShadow: {
				pink: 'inset 0 0 0 1px hsl(0, 80%, 86%)',
				red: 'inset 0 0 0 2px hsl(0, 93%, 68%)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
