/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "360px",
				sm: "560px",
				md: "820px",
				lg: "980px",
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
				"first-slide": "url('/img/first-slide.mp4')",
				"second-slide": "url('/img/second-slide.jpg')",
				"third-slide": "url('/img/third-slide.jpg')",
				"fourth-slide": "url('/img/fourth-slide.jpg')",
				"fifth-slide": "url('/img/fifth-slide.jpg')",
				"blog-page": "url('/img/blog-cover.png')",
				"contact-page": "url('/img/contact-cover.png')",
				"post-page": "url('/img/post-cover.png')",
				"ods-footer": "url('/img/ods-footer.png')",
				"ods-footer-mobile": "url('/img/ods-footer-mobile.png')",
				colorful: "url('/img/colorful-bg.svg')",
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
						transform: "translateX(400px)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0px)",
						opacity: "1",
					},
				},
				"slide-out": {
					from: {
						transform: "translateX(0px)",
						opacity: "1",
						"z-index": "0",
					},
					to: {
						transform: "translateX(-400px)",
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
