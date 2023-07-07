import React from "react";

export const NewsLetter: React.FC = () => {
	return (
		<section className="bg-green-400 py-12">
			<div className="wrapper-full flex justify-between items-center">
				<h2 className="w-[380px] text-white">
					Assine nossa newsletter com conteúdo exclusivo
				</h2>
				<div className="flex">
					<input
						type="text"
						name=""
						id=""
						className="ml-3 rounded-lg h-[52px] p-3 border border-green-700 w-48"
						placeholder="Seu nome"
					/>
					<input
						type="text"
						name=""
						id=""
						className="ml-3 rounded-lg h-[52px] p-3 border border-green-700 w-48"
						placeholder="Seu e-mail"
					/>
					<button type="button" className="bt bt-primary shrink-0 ml-3">
						Quero assinar
					</button>
				</div>
			</div>
		</section>
	);
};
