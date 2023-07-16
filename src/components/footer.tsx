import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type FooterProps = {
	isGreen?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isGreen }) => {
	return (
		<footer className={isGreen ? "bg-green-700" : "bg-white"}>
			<div className="wrapper-full flex py-8 justify-between max-lg:flex-col max-lg:items-center">
				<div className="lg:w-[300px] flex items-center flex-col">
					{isGreen ? (
						<StaticImage
							className="object-left-top"
							src="../images/logo-white.svg"
							alt="Logo da empresa Polo Brasil Zero."
						/>
					) : (
						<StaticImage
							className="object-left-top"
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
				<div className="lg:w-[300px] max-lg:flex max-lg:flex-col max-lg:items-center">
					<h3
						className={`mt-8 ${
							isGreen ? "text-green-100" : "text-green-700"
						} font-bold `}
					>
						Nos siga nas redes sociais
					</h3>
					<div className="mt-3 flex items-center justify-center">
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
				</div>

				<div className="max-lg:flex max-lg:flex-col max-lg:mt-8">
					<h3
						className={`font-bold ${
							isGreen ? "text-green-100" : "text-green-700"
						} max-lg:text-center`}
					>
						Menu
					</h3>
					<ul
						className={`footer-menu ${
							isGreen ? "is-green" : ""
						} max-lg:flex max-lg:flex-wrap`}
					>
						<li className="">Esg - Blog</li>
						<li className="max-lg:ml-6">Sobre Nós</li>
						<li className="max-lg:ml-6">Sustentabilidade</li>
						<li className="max-lg:ml-6">Terrenos</li>
						<li className="max-lg:ml-6">Parceiros</li>
						<li className="max-lg:ml-6">Contato</li>
						<li className="font-bold max-lg:ml-6">Baixar mídia kit</li>
					</ul>
				</div>
			</div>
			<hr
				className={`border -mt-5 mb-10 max-w-screen-xl mx-auto opacity-50 ${
					isGreen ? "border-green-100" : "border-green-700"
				}`}
			/>
			<div className="bg-red-600 max-lg:h-20 lg:h-14 flex justify-center items-center">
				<p className="text-green-100 font-bold max-lg:hidden">
					© 2023 Polobrasilzero by Blackelphant | Todos os direitos reservados
				</p>
				<p className="text-green-100 font-bold lg:hidden text-center">
					© 2023 Polobrasilzero by Blackelphant <br /> Todos os direitos
					reservados
				</p>
			</div>
		</footer>
	);
};
