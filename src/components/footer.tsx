import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type FooterProps = {
	isGreen?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isGreen }) => {
	return (
		<footer className={isGreen ? "bg-green-700" : "bg-white"}>
			<div className="wrapper-full flex py-8 justify-between">
				<div className="w-[300px]">
					{isGreen ? (
						<StaticImage
							className="scale-125 object-left-top"
							src="../images/logo-white.svg"
							alt="Logo da empresa Polo Brasil Zero."
						/>
					) : (
						<StaticImage
							className="scale-125 object-left-top"
							src="../images/logo-green.svg"
							alt="Logo da empresa Polo Brasil Zero."
						/>
					)}

					<span
						className={`mt-3 block ${
							isGreen ? "text-green-100" : "text-green-700"
						}`}
					>
						contato@polobrasilzero.com.br
					</span>
					<span
						className={`mt-3 block ${
							isGreen ? "text-green-100" : "text-green-700"
						}`}
					>
						Tel. +55 {"("}11{")"} 1234-5678
					</span>
				</div>
				<div className="w-[300px]">
					<p
						className={`mt-8 ${
							isGreen ? "text-green-100" : "text-green-700"
						} font-bold `}
					>
						Nos siga nas redes sociais
					</p>
					<div className="mt-3">
						{isGreen ? (
							<>
								<StaticImage
									className="w-16 h-16"
									src="../images/facebook-white.svg"
									alt="Nossa página no facebook."
								/>
								<StaticImage
									className="w-16 h-16 ml-4"
									src="../images/linkedin-white.svg"
									alt="Nossa página no linkedIn."
								/>
								<StaticImage
									className="w-16 h-16 ml-4"
									src="../images/instagram-white.svg"
									alt="Nosso perfil no instagram."
								/>
							</>
						) : (
							<>
								<StaticImage
									className="w-16 h-16"
									src="../images/facebook.svg"
									alt="Nossa página no facebook."
								/>
								<StaticImage
									className="w-16 h-16 ml-4"
									src="../images/linkedin.svg"
									alt="Nossa página no linkedIn."
								/>
								<StaticImage
									className="w-16 h-16 ml-4"
									src="../images/instagram.svg"
									alt="Nosso perfil no instagram."
								/>
							</>
						)}
					</div>
					{/* <h3
						className={`font-bold ${
							isGreen ? "text-green-100" : "text-green-700"
						}`}
					>
						Blog
					</h3>

					<div className="bg-green-400 pl-5 py-5 flex mt-5 shadow-blog-footer-post relative">
						<div className="w-[200px]">
							<p className={`${isGreen ? "text-green-800" : "text-green-700"}`}>
								Lorem Ipsum has been the industry's standard
							</p>
							<span
								className={`mt-3 block ${
									isGreen ? "text-green-800" : "text-green-700"
								}`}
							>
								Setembro 10 2024{" "}
							</span>
						</div>
						<div className="bg-black h-full w-20 shrink-0 absolute right-0 top-0"></div>
					</div>

					<div className="bg-green-400 pl-5 py-5 flex mt-5 shadow-blog-footer-post relative">
						<div className="w-[200px]">
							<p className={`${isGreen ? "text-green-800" : "text-green-700"}`}>
								Lorem Ipsum has been the industry's standard
							</p>
							<span
								className={`mt-3 block ${
									isGreen ? "text-green-800" : "text-green-700"
								}`}
							>
								Setembro 10 2024{" "}
							</span>
						</div>
						<div className="bg-black h-full w-20 shrink-0 absolute right-0 top-0"></div>
					</div> */}
				</div>

				<div>
					<h3
						className={`font-bold ${
							isGreen ? "text-green-100" : "text-green-700"
						}`}
					>
						Menu
					</h3>
					<ul className={`footer-menu ${isGreen ? "is-green" : ""}`}>
						<li>Esg - Blog</li>
						<li>Sobre Nós</li>
						<li>Sustentabilidade</li>
						<li>Terrenos</li>
						<li>Parceiros</li>
						<li>Contato</li>
						<li className="font-bold">Baixar mídia kit</li>
					</ul>
				</div>
			</div>
			<hr
				className={`border -mt-5 mb-10 max-w-screen-xl mx-auto opacity-50 ${
					isGreen ? "border-green-100" : "border-green-700"
				}`}
			/>
			<div className="bg-red-600 h-14 flex justify-center items-center">
				<p className="text-green-100 font-bold">
					© 2023 Polobrasilzero by Blackelphant | Todos os direitos reservados
				</p>
			</div>
		</footer>
	);
};
