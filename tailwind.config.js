/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				// xs: "280px",
				// sm: "560px",
				// md: "820px",
				// lg: "1080px",
				xl: "1200px",
				// "2xl": "1440px",
			},
			colors: {
				white: "#FFFFFF",
				black: "#1F1F1F",
				"gray-500": "#848484",
				"green-100": "#EEF4C3",
				"green-400": "#ADD18C",
				"green-500": "#97C57A",
				"green-600": "#82B967",
				"green-700": "#6CAD55",
				"green-800": "#2E601D",
				"dark-green-700": "#558b43",
				"light-green": "#EEF4C3",
			},
			fontFamily: {
				sans: "Noto Sans",
			},
			backgroundImage: {
				"first-slide": "url('/img/first-slide.png')",
				"second-slide": "url('/img/second-slide.png')",
				"third-slide": "url('/img/third-slide.png')",
				"fourth-slide": "url('/img/fourth-slide.png')",
				"fifth-slide": "url('/img/fifth-slide.png')",
				"blog-page": "url('/img/blog-cover.png')",
				"contact-page": "url('/img/contact-cover.png')",
				"post-page": "url('/img/post-cover.png')",
			},
			boxShadow: {
				input:
					"0px 4px 24px 0px rgba(51, 51, 51, 0.24), 0px 4px 4px 0px rgba(51, 51, 51, 0.04)",
				"blog-footer-post": "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
				"post-side-picture": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			},
			keyframes: {
				"slide-in": {
					from: {
						left: "400px",
						opacity: "0",
					},
					to: {
						left: "0",
						opacity: "1",
					},
				},
				"slide-out": {
					from: {
						left: "0",
						opacity: "1",
						"z-index": "0",
					},
					to: {
						left: "-400px",
						opacity: "0",
						"z-index": "-9999",
					},
				},
			},
			animation: {
				"slide-in": "slide-in 1s ease-in-out forwards",
				"slide-out": "slide-out 1s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};