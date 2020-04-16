module.exports = {
	theme: {
		maxHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
		},
		extend: {
			fontFamily : {
				'header' : ['Rubik', 'sans-serif'],
				'lato' : ['Lato', 'sans-serif'], 
				'montserrat' : ['Montserrat', 'sans-serif'],
				'lora' : ['Lora', 'serif']
			},
		},
		spinner: (theme) => ({
			default: {
        color: '#dae1e7', // color you want to make the spinner
        size: '2em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '700ms', // the speed at which the spinner should rotate
    },
}),
	},
	variants: {},
	plugins: [
	require('tailwindcss-spinner')()
	],
}
