import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Navbar: React.FC = () => {
	const [scrollDown, setScrollDown] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
			className={`z-[99] py-6 transition-all duration-200 fixed top-0 w-full ${
				scrollDown && "glass-effect"
			}`}
		>
			<div className="wrapper-full flex justify-between items-center">
				<a href="https://polobrasilzero.com/" className="shrink-0 w-[136px]">
					<StaticImage
						loading="lazy"
						src="../images/logo-white.svg"
						alt="Logo da empresa Polo Brasil Zero."
					/>
				</a>
				<a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<StaticImage
						alt="Menu hamburger"
						src="../images/menu-hamburger.svg"
						className="lg:!hidden cursor-pointer"
					/>
				</a>
				{isMenuOpen && (
					<div
						className="bg-black/60 absolute top-0 left-0 w-screen h-screen"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					></div>
				)}
				<ul className={`nav-menu ${isMenuOpen && "nav-menu-open"}`}>
					<li className="absolute left-3 top-3 !mt-0">
						<a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<StaticImage
								alt="Fechar menu hamburger"
								src="../images/close.svg"
								className="lg:!hidden cursor-pointer"
							/>
						</a>
					</li>
					<li>Home</li>
					<li>ESG</li>
					<li>Sobre nós</li>
					<li>Sustentabilidade</li>
					<li>Lotes</li>
					<li>Parceiros</li>
					<li>
						<button type="button" className="bt bt-primary shrink-0">
							<StaticImage
								alt="Ícone de baixar"
								src="../images/send.svg"
								className="bt-icon mr-3"
							/>{" "}
							Entrar em contato
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
