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
				md: '30rem',
				lg: '37rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
