/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "340px",
				sm: "560px",
				md: "820px",
				lg: "980px",
				xl: "1200px",
				"2xl": "1440px",
				"3xl": "1585px",
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
				"xs-second-slide": "url('/img/slides/xs-second-slide.jpg')",
				"sm-second-slide": "url('/img/slides/sm-second-slide.jpg')",
				"md-second-slide": "url('/img/slides/md-second-slide.jpg')",
				"lg-second-slide": "url('/img/slides/lg-second-slide.jpg')",
				"xl-second-slide": "url('/img/slides/xl-second-slide.jpg')",
				"xs-third-slide": "url('/img/slides/xs-third-slide.jpg')",
				"sm-third-slide": "url('/img/slides/sm-third-slide.jpg')",
				"md-third-slide": "url('/img/slides/md-third-slide.jpg')",
				"lg-third-slide": "url('/img/slides/lg-third-slide.jpg')",
				"xl-third-slide": "url('/img/slides/xl-third-slide.jpg')",
				"xs-fourth-slide": "url('/img/slides/xs-fourth-slide.jpg')",
				"sm-fourth-slide": "url('/img/slides/sm-fourth-slide.jpg')",
				"md-fourth-slide": "url('/img/slides/md-fourth-slide.jpg')",
				"lg-fourth-slide": "url('/img/slides/lg-fourth-slide.jpg')",
				"xl-fourth-slide": "url('/img/slides/xl-fourth-slide.jpg')",
				"xs-fifth-slide": "url('/img/slides/xs-fifth-slide.jpg')",
				"sm-fifth-slide": "url('/img/slides/sm-fifth-slide.jpg')",
				"md-fifth-slide": "url('/img/slides/md-fifth-slide.jpg')",
				"lg-fifth-slide": "url('/img/slides/lg-fifth-slide.jpg')",
				"xl-fifth-slide": "url('/img/slides/xl-fifth-slide.jpg')",

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
