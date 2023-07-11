import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Polo Brasil Zero`,
		siteUrl: `https://www.polobrasilzero.com.br`,
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
	],
};

export default config;
