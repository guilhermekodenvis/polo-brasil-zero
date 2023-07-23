import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type FooterProps = {
	isGreen?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isGreen }) => {
	return (
		<footer className={isGreen ? "bg-green-700" : "bg-white"}>
			<div className="wrapper-full flex py-8 justify-between max-lg:flex-col max-lg:items-center">
				<div className="lg:w-[300px] flex max-lg:items-center lg:items-start flex-col">
					{isGreen ? (
						<StaticImage
							className="object-left-top"
							src="../images/logo-white.svg"
							alt="Logo da empresa Polo Brasil Zero."
						/>
					) : (
						<StaticImage
							className="object-left-top w-[200px]"
							src="../images/logo-green.png"
							alt="Logo da empresa Polo Brasil Zero."
						/>
					)}

					<span
						className={`mt-3 block ${
							isGreen ? "text-green-100" : "text-green-700"
						}`}
					>
						lhmt@polobrasilzero.com
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
					<div className="mt-3 flex items-center max-lg:justify-center lg:justify-start">
						{isGreen ? (
							<>
								<StaticImage
									// className="w-16 h-16"
									src="../images/facebook-white.svg"
									alt="Nossa página no facebook."
								/>
								<StaticImage
									className="ml-4"
									// className="w-16 h-16 ml-4"
									src="../images/linkedin-white.svg"
									alt="Nossa página no linkedIn."
								/>
								<StaticImage
									className="ml-4"
									// className="w-16 h-16 ml-4"
									src="../images/instagram-white.svg"
									alt="Nosso perfil no instagram."
								/>
							</>
						) : (
							<>
								<StaticImage
									src="../images/facebook.png"
									alt="Nossa página no facebook."
								/>
								<StaticImage
									className="ml-4"
									src="../images/linkedin.png"
									alt="Nossa página no linkedIn."
								/>
								<StaticImage
									className="ml-4"
									src="../images/instagram.png"
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
						className={`footer-menu flex ${
							isGreen ? "is-green" : ""
						} max-lg:flex max-lg:flex-wrap`}
					>
						<div>
							<li className="max-lg:mr-6">Esg - Blog</li>
							<li className="max-lg:mr-6">Sobre Nós</li>
							<li className="max-lg:mr-6">Sustentabilidade</li>
							<li className="max-lg:mr-6">Terrenos</li>
						</div>
						<div className="ml-10">
							<li className="max-lg:mr-6">Parceiros</li>
							<li className="max-lg:mr-6">Contato</li>
							<li className="font-bold">Baixar mídia kit</li>
						</div>
					</ul>
				</div>
			</div>
			<hr
				className={`border -mt-5 mb-10 max-w-screen-xl mx-auto opacity-50 ${
					isGreen ? "border-green-100" : "border-green-700"
				}`}
			/>
			<div className="max-lg:bg-ods-footer-mobile lg:bg-ods-footer max-lg:h-[59px] lg:h-[42px] flex justify-center items-center">
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
