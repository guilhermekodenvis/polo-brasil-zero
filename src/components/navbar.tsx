import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Navbar: React.FC = () => {
	const [scrollDown, setScrollDown] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const isScrollDown = window.scrollY > 0;
			console.log("isScrollDown", isScrollDown);
			setScrollDown(isScrollDown);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={
				scrollDown
					? "z-[99] py-6 transition-all duration-200 fixed top-0 w-full glass-effect"
					: "z-[99] py-6 transition-all duration-200 fixed top-0 w-full"
			}
		>
			<div className="wrapper-full flex justify-between items-center">
				<a href="#" className="shrink-0 w-[136px]">
					<StaticImage
						src="../images/logo-white.svg"
						alt="Logo da empresa Polo Brasil Zero."
					/>
				</a>
				<ul className="nav-menu">
					<li>Home</li>
					<li>ESG</li>
					<li>Sobre nós</li>
					<li>Sustentabilidade</li>
					<li>Lotes</li>
					<li>Parceiros</li>
				</ul>
				<button type="button" className="bt bt-primary shrink-0">
					Entrar em contato
				</button>
			</div>
		</nav>
	);
};
