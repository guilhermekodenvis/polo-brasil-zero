import { PageProps } from "gatsby";
import React from "react";
import { Navbar } from "../components/navbar";
import { NewsLetter } from "../components/news-letter";
import { Footer } from "../components/footer";

const PostPage: React.FC<PageProps> = () => {
	return (
		<>
			<Navbar />
			<div className="bg-post-page bg-no-repeat bg-cover ">
				<div className="bg-gradient-green h-[530px]">
					<div className="wrapper-full relative">
						<h1 className="absolute top-72 text-white text-5xl w-[650px]">
							Centrais de abastecimento e tratamento de água
						</h1>
					</div>
				</div>
			</div>
			<section className="py-16">
				<div className="wrapper-full flex">
					<div className="w-4/5 shrink-0 pr-12">
						<div className="flex justify-between mb-14">
							<span className="text-gray-500">21 de junho de 2023</span>
							<span className="text-gray-500">Sustentabilidade</span>
							<span className="text-gray-500">Luiz Henrique Tavares</span>
						</div>
						<p className="text-gray-500 mt-10">
							Lorem ipsum is simply dummy text of the printing and typesetting
							industry. lorem ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic.
						</p>
						<p className="text-gray-500 mt-10">
							Lorem ipsum is simply dummy text of the printing and typesetting
							industry. lorem ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic.
						</p>
						<q className="font-bold text-2xl border-l-8 border-green-800 block ml-14 px-7 mt-14 w-10/12">
							Tomorrow is the most important thing in life. Comes into us at
							midnight very clean. It's perfect when it arrives and it puts
							itself in our hands. It hopes we've learned something from
							yesterday.
						</q>
						<div className="w-10/12 h-[380px] rounded-xl bg-black mt-12"></div>
						<p className="text-gray-500 mt-10">
							Lorem ipsum is simply dummy text of the printing and typesetting
							industry. lorem ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic.
						</p>
						<p className="text-gray-500 mt-10">
							Lorem ipsum is simply dummy text of the printing and typesetting
							industry. lorem ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic.
						</p>
						<hr className="border border-gray-500 opacity-50 mt-12" />
						<div className="flex justify-between mt-4">
							<a href="" className="font-bold">
								Voltar
							</a>
							<a href="" className="font-bold">
								Próximo
							</a>
						</div>
					</div>
					<div>
						<h2 className="text-base font-bold">Categorias:</h2>
						<div className="flex justify-between mt-4">
							<span className="text-gray-500">ESG</span>
							<span className="text-gray-500">03</span>
						</div>
						<div className="flex justify-between mt-4">
							<span className="text-gray-500">Negócios</span>
							<span className="text-gray-500">01</span>
						</div>
						<div className="flex justify-between mt-4">
							<span className="text-gray-500">Terrenos</span>
							<span className="text-gray-500">04</span>
						</div>
						<div className="flex justify-between mt-4">
							<span className="text-gray-500">Sustentabilidade</span>
							<span className="text-gray-500">10</span>
						</div>
						<h2 className="text-base font-bold mt-8">Últimos posts</h2>
						<div className="flex mt-3">
							<div className="shrink-0 w-16 h-16 rounded-lg bg-black shadow-post-side-picture"></div>
							<div className="ml-3">
								<h3 className="font-medium text-sm">Matriz energética</h3>
								<p className="text-gray-500 text-xs">
									Lorem ipsum is simply dummy text of the
								</p>
							</div>
						</div>
						<div className="flex mt-3">
							<div className="shrink-0 w-16 h-16 rounded-lg bg-black shadow-post-side-picture"></div>
							<div className="ml-3">
								<h3 className="font-medium text-sm">Matriz energética</h3>
								<p className="text-gray-500 text-xs">
									Lorem ipsum is simply dummy text of the
								</p>
							</div>
						</div>
						<div className="flex mt-3">
							<div className="shrink-0 w-16 h-16 rounded-lg bg-black shadow-post-side-picture"></div>
							<div className="ml-3">
								<h3 className="font-medium text-sm">Matriz energética</h3>
								<p className="text-gray-500 text-xs">
									Lorem ipsum is simply dummy text of the
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<NewsLetter />
			<Footer isGreen />
		</>
	);
};

export default PostPage;
