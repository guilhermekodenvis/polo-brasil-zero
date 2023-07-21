import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const NewsLetter: React.FC = () => {
	return (
		<section className="bg-green-400 py-12 max-lg:-mt-4">
			<div className="wrapper-full flex justify-between items-center max-lg:flex-col">
				<h2 className="lg:w-[380px] text-white max-lg:text-center">
					Assine nossa newsletter com conteúdo exclusivo
				</h2>
				<div className="flex max-lg:flex-col max-lg:w-full">
					<input
						type="text"
						name=""
						id=""
						className="lg:ml-3 rounded-lg h-[52px] p-3 border border-green-700 w-48 max-lg:w-full max-lg:mt-9 text-green-800"
						placeholder="Seu nome"
					/>
					<input
						type="text"
						name=""
						id=""
						className="lg:ml-3 rounded-lg h-[52px] p-3 border border-green-700 w-48 max-lg:w-full max-lg:mt-3 text-green-800"
						placeholder="Seu e-mail"
					/>
					<button
						type="button"
						className="bt bt-primary shrink-0 lg:ml-3 max-lg:mt-3 max-lg:w-full flex justify-center items-center"
					>
						<StaticImage
							alt="Ícone de enviar mensagem"
							src="../images/send.svg"
							className="bt-icon mr-3"
						/>
						Quero assinar
					</button>
				</div>
			</div>
		</section>
	);
};
