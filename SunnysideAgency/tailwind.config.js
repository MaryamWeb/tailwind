module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'header-lg': "url('./images/desktop/image-header.jpg')",
				'header-sm': "url('./images/mobile/image-header.jpg')",
				'egg-lg': "url('./images/desktop/image-transform.jpg')",
				'egg-sm': "url('./images/mobile/image-transform.jpg')",
				'pink-drink-lg': "url('./images/desktop/image-stand-out.jpg')",
				'pink-drink-sm': "url('./images/mobile/image-stand-out.jpg')",
				'cherry-lg': "url('./images/desktop/image-graphic-design.jpg')",
				'cherry-sm': "url('./images/mobile/image-graphic-design.jpg')",
				'tangerine-lg': "url('./images/desktop/image-photography.jpg')",
				'tangerine-sm': "url('./images/mobile/image-photography.jpg')"
			}),
			fontFamily: {
				Barlow: [ 'Barlow' ],
				Fraunces: [ 'Fraunces' ]
			},
			minHeight: {
				sm: '24rem',
				md: '34rem',
				lg: '42rem'
			},
			colors: {
				peach: '#fffbf8',
				'light-green': '#90d4c5',
				'dark-green': '#2c7564'
			}
		}
	},
	variants: {
		extend: {
			fill: [ 'hover', 'focus' ]
		}
	},
	plugins: []
};
