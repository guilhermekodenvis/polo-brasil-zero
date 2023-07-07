import * as React from "react";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Input } from "../components/input";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { NewsLetter } from "../components/news-letter";

const IndexPage: React.FC<PageProps> = () => {
	const [activedSlide, setActivedSlide] = React.useState(0);
	const [activedPreSalesImage, setActivedPreSalesImage] = React.useState(0);
	const [isVideoOpen, setIsVideoOpen] = React.useState(false);

	React.useEffect(() => {
		console.log(activedPreSalesImage);
	}, [activedPreSalesImage]);

	const handleCloseVideoClick = () => {
		setIsVideoOpen(false);
	};

	const handleOpenVideo = () => {
		setIsVideoOpen(true);
	};

	const handleClickPreSaleImage = (preSaleImage: number) => {
		setActivedPreSalesImage(preSaleImage);
	};

	const handleClickGoToNextPreSaleImage = () => {
		console.log("ola");
		setActivedPreSalesImage((activedPreSalesImage + 1) % 3);
	};

	const handleClickGoToPreviousPreSaleImage = () => {
		if (activedPreSalesImage === 0) {
			setActivedPreSalesImage(2);
			return;
		}
		setActivedPreSalesImage((activedPreSalesImage - 1) % 3);
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			setActivedSlide((prevSlide) => (prevSlide + 1) % 5);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Helmet>
				<title>Polo Brasil Zero - Distrito Industrial 100% sustentável.</title>
			</Helmet>
			<Navbar />
			{isVideoOpen && (
				<div
					className="fixed w-screen h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-500/50 flex justify-center items-center z-50"
					onClick={handleCloseVideoClick}
				>
					<div className="w-[1000px] bg-black h-[600px]">
						<iframe
							src="https://drive.google.com/file/d/1riMDtdnDbUtORfHkMqgO93rFb9N0315n/preview"
							width="1000"
							height="600"
							allow="autoplay"
						></iframe>
					</div>
				</div>
			)}
			<header className="">
				<ul className="w-screen flex overflow-hidden">
					<li
						className={`${
							activedSlide === 0 ? "active" : "inactive"
						} bg-first-slide bg-no-repeat bg-cover w-screen shrink-0 absolute`}
					>
						<div className="bg-gradient-green h-[540px] w-screen">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 w-[400px]">
									Primeiro Parque industrial ZERO EMISSÕES do Brasil
								</h1>
								<p className="text-green-100 mt-2 w-[580px]">
									Com reciclagem total das emissões líquidas e sólidas geradas,
									seguindo padrões de economia circular e de baixo carbo.
								</p>
								<button type="button" className="bt bt-outline-primary mt-8">
									Conheça o projeto
								</button>
							</div>
						</div>
					</li>
					<li
						className={`${
							activedSlide === 1 ? "active" : "inactive"
						} bg-second-slide bg-no-repeat bg-cover w-screen shrink-0 absolute`}
					>
						<div className="bg-gradient-green h-[540px] w-screen">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 w-[400px]">
									Centro Sustentável Polo Brazil Zero
								</h1>
								<p className="text-green-100 mt-2 w-[580px]">
									Uma iniciativa privada, onde a inovação se encontra com a
									responsabilidade socioambiental, alinhado com os objetivos de
									desenvolvimento sustentável da ONU.
								</p>
								<button type="button" className="bt bt-outline-primary mt-8">
									Conheça o projeto
								</button>
							</div>
						</div>
					</li>
					<li
						className={`${
							activedSlide === 2 ? "active" : "inactive"
						} bg-third-slide bg-no-repeat bg-cover w-screen shrink-0 absolute`}
					>
						<div className="bg-gradient-green h-[540px] w-screen">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 w-[400px]">
									Uma empresa que se importa com o meio ambiente
								</h1>
								<p className="text-green-100 mt-2 w-[580px]">
									Aqui construímos um futuro sem emissões diretas. Junte-se a
									nós, nessa transformação verde rumo a DESCARBONIZAÇÃO da
									indústria Brasileira com SUSTENTABILIDADE.
								</p>
								<button type="button" className="bt bt-outline-primary mt-8">
									Conheça o projeto
								</button>
							</div>
						</div>
					</li>
					<li
						className={`${
							activedSlide === 3 ? "active" : "inactive"
						} bg-fourth-slide bg-no-repeat bg-cover w-screen shrink-0 absolute`}
					>
						<div className="bg-gradient-green h-[540px] w-screen">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 w-[400px]">
									No coração do nosso complexo
								</h1>
								<p className="text-green-100 mt-2 w-[580px]">
									Bombeando todo DESENVOLVIMENTO SUSTENTÁVEL, um EcoHub de
									Tecnologia voltado para a Agricultura regenerativa BC,
									Indústria 5.0 e Sociabilidade.
								</p>
								<button type="button" className="bt bt-outline-primary mt-8">
									Conheça o projeto
								</button>
							</div>
						</div>
					</li>
					<li
						className={`${
							activedSlide === 4 ? "active" : "inactive"
						} bg-fifth-slide bg-no-repeat bg-cover w-screen shrink-0 absolute`}
					>
						<div className="bg-gradient-green h-[540px] w-screen">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 w-[400px]">Nossa missão</h1>
								<p className="text-green-100 mt-2 w-[580px]">
									Vai além como compromisso socioambiental, com projetos
									voltados para a TRANSFORMAÇÃO das PESSOAS e COMUNIDADE, com
									urbanismo social de verdade.
								</p>
								<button type="button" className="bt bt-outline-primary mt-8">
									Conheça o projeto
								</button>
							</div>
						</div>
					</li>
				</ul>
			</header>
			<section className="py-16 mt-[540px]">
				<div className="flex wrapper-full">
					<div className="flex flex-col justify-center">
						<h2 className="w-80 text-green-800">
							Planta de venda do parque industrial
						</h2>
						<h3 className="mt-7">Nossos Lotes Sustentáveis</h3>
						<p className="mt-2">
							Todos os lotes já estão equipados com tubulações centrais de
							abastecimento e tratamento de água, rede de coleta dos efluentes
							Industriais e sanitários ligado na ETE de água, rede de coleta dos
							efluentes Industriais e sanitários ligado na ETE de água, rede de
							coleta dos efluentes Industriais e sanitários ligado na ETE{" "}
						</p>
					</div>
					<div
						className="w-[450px] h-[340px] shrink-0 ml-20 relative flex justify-center items-center cursor-pointer"
						onClick={handleOpenVideo}
					>
						<StaticImage
							className="rounded-3xl"
							alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
							src="../images/pbz-render-video-banner.png"
						/>
						<StaticImage
							alt="Ícone de play"
							src="../images/play.svg"
							className="absolute"
						/>
					</div>
				</div>
				<StaticImage
					className="mx-auto block w-fit mt-32"
					alt="Planta do parque industrial"
					src="../images/ground.svg"
				/>
				<button
					type="button"
					className="bt bt-outline-primary mx-auto block mt-9"
				>
					Baixar prospecto de venda
				</button>
			</section>
			<section className="bg-green-100 py-8">
				<div className="flex wrapper-full bg-white rounded-3xl !p-7 justify-between items-center">
					<div>
						<div className="relative flex justify-center items-center">
							{activedPreSalesImage === 0 && (
								<StaticImage
									className="rounded-2xl w-[658px] h-[367px]"
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-one.png"
								/>
							)}
							{activedPreSalesImage === 1 && (
								<StaticImage
									className="rounded-2xl w-[658px] h-[367px]"
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-two.png"
								/>
							)}
							{activedPreSalesImage === 2 && (
								<StaticImage
									className="rounded-2xl w-[658px] h-[367px]"
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-three.png"
								/>
							)}
							<div className="absolute flex justify-between w-full px-7">
								<a
									href="#"
									className="cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										handleClickGoToPreviousPreSaleImage();
									}}
								>
									<StaticImage
										className="cursor-pointer"
										alt="Voltar uma foto"
										src="../images/chevron-left.svg"
									/>
								</a>
								<a
									href="#"
									className="cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										handleClickGoToNextPreSaleImage();
									}}
								>
									<StaticImage
										alt="Ir para a próxima foto"
										src="../images/chevron-right.svg"
									/>
								</a>
							</div>
						</div>
						<div className="flex justify-between pt-7">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleClickPreSaleImage(0);
								}}
							>
								<StaticImage
									onClick={() => handleClickPreSaleImage(0)}
									className={`w-[203px] rounded-2xl ${
										activedPreSalesImage === 0 &&
										"border-[6px] border-green-700 bg-green-700"
									}`}
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-one.png"
								/>
							</a>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleClickPreSaleImage(1);
								}}
							>
								<StaticImage
									onClick={() => handleClickPreSaleImage(1)}
									className={`w-[203px] rounded-2xl ${
										activedPreSalesImage === 1 &&
										"border-[6px] border-green-700 bg-green-700"
									}`}
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-two.png"
								/>
							</a>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleClickPreSaleImage(2);
								}}
							>
								<StaticImage
									onClick={() => handleClickPreSaleImage(2)}
									className={`w-[203px] rounded-2xl ${
										activedPreSalesImage === 2 &&
										"border-[6px] border-green-700 bg-green-700"
									}`}
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-three.png"
								/>
							</a>
						</div>
					</div>
					<div className="w-full">
						<div className="flex flex-col items-center w-[300px] m-auto">
							<h2 className="text-green-700 text-center w-[250px]">
								Pré lançamento de vendas
							</h2>
							<h3 className="mt-2 text-green-700 font-semibold">
								Investimento em real estate
							</h3>
							<p className="text-center mt-10">
								Todos os lotes já estão equipados com tubulações centrais de
								abastecimento e tratamento de água, rede de coleta dos efluentes
								Industriais e sanitários ligado na ETE.
							</p>
							<h3 className="mt-10 text-green-700 font-bold">
								Garanta seu lote
							</h3>
							<span className="text-green-700 mt-1">
								Entrega finalizada em 2024
							</span>
							<button type="button" className="bt bt-primary mt-10">
								Entrar em contato
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16">
				<div className="flex wrapper-full items-center">
					<div className="flex flex-col">
						<h2>Centro Sustentável Industrial, Tecnológico e Social</h2>
						<p className="mt-7">
							Nosso Modelo Sustentável de Negócio impulsiona a transformação
							industrial com foco socioambiental, com inovação total em gestão
							de resíduos líquidos, sólidos e gasosos, sendo o primeiro parque
							industrial zero emissões do Brasil. Buscamos equilibrar os
							aspectos econômicos, sociais e ambientais visando criar valor a
							longo prazo para as empresas, sociedade e o meio ambiente.
						</p>
						<button type="button" className="bt bt-outline-primary mt-4">
							Saiba mais
						</button>
					</div>
					<div
						className="w-[450px] h-[340px] shrink-0 ml-20 relative flex justify-center items-center cursor-pointer"
						onClick={handleOpenVideo}
					>
						<StaticImage
							className="rounded-3xl"
							alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
							src="../images/pbz-render-video-banner.png"
						/>
						<StaticImage
							alt="Ícone de play"
							src="../images/play.svg"
							className="absolute"
						/>
					</div>
				</div>

				<div className="flex wrapper-full mt-24 items-center">
					<StaticImage
						alt="Imagem que mostra o plano ESG. (ambiental, social, governança, econômico, tecnológico)"
						src="../images/esg.png"
						className="shrink-0"
					/>
					<div className="ml-64">
						<h2>Missão de liderança</h2>
						<p className="mt-7">
							Buscamos equilibrar os aspectos econômicos, sociais e ambientais
							visando criar valor a longo prazo para as empresas, sociedade e o
							meio ambiente. criar valor a longo prazo para as empresas,
							sociedade e o meio ambiente.
						</p>
						<button type="button" className="bt bt-outline-primary mt-4">
							Saiba mais
						</button>
					</div>
				</div>

				<div className="wrapper-full flex mt-20">
					<div>
						<h2>Sustentabilidade</h2>
						<p className="mt-7">
							Conheça como boa práticas e foco de sustentabilidade pode
							transformar o futuro da indústria, das pessoas e do planeta
						</p>
					</div>
					<StaticImage
						alt="Lista de todas as ODS's da ONU"
						src="../images/odss.png"
						className="shrink-0 ml-20"
						objectFit="contain"
					/>
				</div>
			</section>
			<section className="bg-green-700 w-full h-[362px]">
				<div className="bg-green-800 h-full wrapper-full flex !px-0">
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner"
							alt="Banner do vídeo"
							src="../images/video-one.png"
						/>
						<StaticImage
							className="w-6 mx-auto top-32 absolute z-[60]"
							alt="Clique aqui para dar play"
							src="../images/play-outline.svg"
						/>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Reciclagem Hídrica
							</h3>
							<p className="text-white w-10/12">
								Tratamento total dos efluentes sanitários e industriais
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner"
							alt="Banner do vídeo"
							src="../images/video-two.png"
						/>
						<StaticImage
							className="w-6 mx-auto top-32 absolute z-[60]"
							alt="Clique aqui para dar play"
							src="../images/play-outline.svg"
						/>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Reciclagem Sólidos
							</h3>
							<p className="text-white w-10/12">
								Coletas, troca interna e logística reversa dos recicláveis
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner"
							alt="Banner do vídeo"
							src="../images/video-one.png"
						/>
						<StaticImage
							className="w-6 mx-auto top-32 absolute z-[60]"
							alt="Clique aqui para dar play"
							src="../images/play-outline.svg"
						/>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Neutralização GEEs
							</h3>
							<p className="text-white w-10/12">
								Mitigar emissões diretas e neutralizar pegada de carbono
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner"
							alt="Banner do vídeo"
							src="../images/video-two.png"
						/>
						<StaticImage
							className="w-6 mx-auto top-32 absolute z-[60]"
							alt="Clique aqui para dar play"
							src="../images/play-outline.svg"
						/>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Matriz energética
							</h3>
							<p className="text-white w-10/12">
								Produção própria de energia limpa, renovável e acessível
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner"
							alt="Banner do vídeo"
							src="../images/video-one.png"
						/>
						<StaticImage
							className="w-6 mx-auto top-32 absolute z-[60]"
							alt="Clique aqui para dar play"
							src="../images/play-outline.svg"
						/>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Urbanismo social
							</h3>
							<p className="text-white w-10/12">
								Desenvolver a comunidade e as pessoas com equidade
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="wrapper-full flex flex-col items-center">
					<div className="flex items-center">
						<div className="flex flex-col">
							<h2>Ambição Net-Zero 2025</h2>
							<p className="mt-4">
								Nosso Modelo Sustentável de Negócio impulsiona a transformação
								industrial com foco socioambiental, com inovação total em gestão
								de resíduos líquidos, sólidos e gasosos, sendo o primeiro parque
								industrial zero emissões do Brasil. Buscamos equilibrar os
								aspectos econômicos, sociais e ambientais visando criar valor a
								longo prazo para as empresas, sociedade e o meio ambiente.
							</p>
						</div>
						<div className="bg-black w-[360px] h-[360px] shrink-0 ml-52"></div>
					</div>
					<h2 className="mt-20">Parceiros estratégicos</h2>
					<div className="flex mt-16 justify-between w-full">
						<StaticImage
							alt="Imagem de um parceiro estratégico"
							src="../images/partner-mock.png"
						/>
						<StaticImage
							alt="Imagem de um parceiro estratégico"
							src="../images/partner-mock.png"
						/>
						<StaticImage
							alt="Imagem de um parceiro estratégico"
							src="../images/partner-mock.png"
						/>
						<StaticImage
							alt="Imagem de um parceiro estratégico"
							src="../images/partner-mock.png"
						/>
						<StaticImage
							alt="Imagem de um parceiro estratégico"
							src="../images/partner-mock.png"
						/>
					</div>
				</div>
			</section>
			<section className="bg-green-100 py-16">
				<div className="wrapper-full">
					<h2>Agenda ESG</h2>
					<div className="mt-9 flex justify-between">
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								className="w-[250px] h-[330px] rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block">
								12 julho 23 - Terrenos
							</span>
						</div>
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								className="w-[250px] h-[330px] rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block">
								12 julho 23 - Terrenos
							</span>
						</div>
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								className="w-[250px] h-[330px] rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block">
								12 julho 23 - Terrenos
							</span>
						</div>
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								className="w-[250px] h-[330px] rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block">
								12 julho 23 - Terrenos
							</span>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-green-700 py-16">
				<div className="wrapper-full flex items-center">
					<div className="flex flex-col">
						<h2 className="text-white">
							E você? Quer fazer parte do nosso parque? Entre em contato
						</h2>
						<div className="mt-16 p-3 border-white rounded-md border w-[330px]">
							<StaticImage
								alt="Ícone de email"
								src="../images/mail.svg"
								className="mr-2"
							/>
							<span className="text-white">contato@polobrasilzero.com.br</span>
						</div>
						<div className="mt-4 p-3 border-white rounded-md border w-[330px] flex items-center">
							<StaticImage
								alt="Ícone de endereço"
								src="../images/map.svg"
								className="mr-2 shrink-0 h-[21px]"
							/>
							<span className="text-white block">
								Av. das Nações Unidas, 14.171 Vila Gertrudes, São Paulo - SP.
								04794-000
							</span>
						</div>

						<div className="mt-4 p-3 border-white rounded-md border w-[330px]">
							<StaticImage
								alt="Ícone de telefone"
								src="../images/phone.svg"
								className="mr-2"
							/>
							<span className="text-white">+55 11 3030-5100</span>
						</div>
					</div>
					<div className="flex flex-col shrink-0 w-[600px] p-12 bg-white rounded-2xl ml-20">
						<Input name="name" placeholder="Seu nome" label="Nome:" />
						<Input
							name="email"
							placeholder="Seu melhor email"
							label="Email:"
							labelClasses="mt-6"
						/>
						<Input
							name="phone"
							placeholder="Seu telefone"
							label="Telefone:"
							labelClasses="mt-6"
						/>
						{/* <Input /> */}
						<span className="block mx-auto mt-6 font-medium">
							<input type="checkbox" name="isTermsReaded" id="isTermsReaded" />{" "}
							Declaro que li os termos de uso.
						</span>
						<button type="button" className="bt bt-primary mx-auto mt-5">
							Enviar
						</button>
					</div>
				</div>
			</section>
			<NewsLetter />
			<Footer />
		</>
	);
};

export default IndexPage;
