import * as React from "react";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Input } from "../components/input";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { NewsLetter } from "../components/news-letter";
import { Selectable } from "../components/selectable";
import Slider from "react-slick";
import netzeroGif from "../images/netzero.gif";

const IndexPage: React.FC<PageProps> = () => {
	const [activedSlide, setActivedSlide] = React.useState(0);
	const [activedPreSalesImage, setActivedPreSalesImage] = React.useState(0);
	const [isVideoOpen, setIsVideoOpen] = React.useState(false);
	const [selectedVideoShow, setSelectedVideoShow] = React.useState("");
	const [contactTypeSelectedOption, setContactTypeSelectedOption] =
		React.useState(-1);
	const ourGroundRef = React.useRef<HTMLDivElement>(null);
	const aboutUsRef = React.useRef<HTMLDivElement>(null);
	const sustentabilityRef = React.useRef<HTMLDivElement>(null);
	const netzeroRef = React.useRef<HTMLDivElement>(null);
	const partinersRef = React.useRef<HTMLDivElement>(null);
	const esgRef = React.useRef<HTMLDivElement>(null);
	const contactRef = React.useRef<HTMLDivElement>(null);
	const sliderRef = React.useRef(null);

	React.useEffect(() => {
		const myVideo1 = document.getElementById("myVideo1");
		myVideo1?.play();

		const myVideo2 = document.getElementById("myVideo2");
		myVideo2?.play();

		const myVideo3 = document.getElementById("myVideo3");
		myVideo3?.play();

		const myVideo4 = document.getElementById("myVideo4");
		myVideo4?.play();

		const myVideo5 = document.getElementById("myVideo5");
		myVideo5?.play();

		const lastSlideDot = document.querySelector(".slick-dots>li:last-child");
		lastSlideDot?.remove();

		const lastSlide = document.getElementById("lastSlide");
		lastSlide?.remove();
	}, []);

	const handleCloseVideoClick = () => {
		setIsVideoOpen(false);
	};

	const handleOpenVideo = (link: string) => {
		setSelectedVideoShow(link);
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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	const handleGoToFirstSlide = () => {
		sliderRef.current.slickGoTo(0);
	};

	return (
		<>
			<Helmet>
				<title>Polo Brasil Zero - Distrito Industrial 100% sustentável.</title>
			</Helmet>
			<Navbar
				ourGroundReference={ourGroundRef}
				aboutUsReference={aboutUsRef}
				sustentabilityReference={sustentabilityRef}
				netzeroReference={netzeroRef}
				partinersReference={partinersRef}
				esgReference={esgRef}
				contactReference={contactRef}
			/>
			{isVideoOpen && (
				<div
					className="fixed w-screen h-screen top-0 left-0 bg-black/60 flex justify-center items-center z-[999]"
					onClick={handleCloseVideoClick}
				>
					<div className="xs:w-[320px] sm:w-[480px] md:w-[780px] xl:w-[1000px] xs:h-[192px] sm:h-[288px] md:h-[468px] xl:h-[600px] mx-auto bg-black">
						<iframe
							className="xs:w-[320px] sm:w-[480px] md:w-[780px] xl:w-[1000px] xs:h-[192px] sm:h-[288px] md:h-[468px] xl:h-[600px] mx-auto"
							src={`${selectedVideoShow}`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
				</div>
			)}
			<header>
				<Slider
					ref={sliderRef}
					{...settings}
					beforeChange={(currentSlide, nextSlide) => {
						if (nextSlide === 5) {
							handleGoToFirstSlide();
						}
					}}
				>
					<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
						<video
							muted
							loop
							id="myVideo1"
							className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
						>
							<source src="/img/first-slidee.mp4" type="video/mp4" />
						</video>
						<div className="bg-gradient-green h-[540px] w-[calc(100vw-15px)]">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 lg:w-[400px]">
									Centro Sustentável POLO BRASIL ZERO
								</h1>
								<p className="text-green-100 mt-2 lg:w-[580px]">
									Uma iniciativa privada, onde a inovação se encontra com a
									responsabilidade socioambiental, alinhado com os objetivos de
									desenvolvimento sustentável da ONU.
								</p>
								<button
									type="button"
									className="bt bt-outline-primary mt-8 flex items-center"
								>
									<StaticImage
										alt="Ícone de baixar"
										src="../images/play-circle.png"
										className="bt-icon mr-3"
									/>{" "}
									Conheça o projeto
								</button>
							</div>
						</div>
					</div>

					<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
						{/* <video
							muted
							loop
							id="myVideo2"
							className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
						>
							<source src="/img/NetZero.mov" type="video/mp4" />
						</video> */}
						<div className="bg-gradient-green h-[540px] w-[calc(100vw-15px)]">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 lg:w-[400px]">
									Primeiro Parque industrial ZERO EMISSÕES do Brasil
								</h1>
								<p className="text-green-100 mt-2 lg:w-[580px]">
									Com reciclagem total das emissões geradas: líquidas, sólidas e
									GEEs, seguindo padrões de economia circular e de baixo carbo.
								</p>
								<button
									type="button"
									className="bt bt-outline-primary mt-8 flex items-center"
								>
									<StaticImage
										alt="Ícone de baixar"
										src="../images/play-circle.png"
										className="bt-icon mr-3"
									/>{" "}
									Conheça o projeto
								</button>
							</div>
						</div>
					</div>

					<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
						<video
							muted
							loop
							id="myVideo3"
							className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
						>
							<source src="/img/third-slide.mp4" type="video/mp4" />
						</video>
						<div className="bg-gradient-green h-[540px] w-[calc(100vw-15px)]">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 lg:w-[400px]">
									Aqui construímos um futuro sem emissões diretas
								</h1>
								<p className="text-green-100 mt-2 lg:w-[580px]">
									Junte-se a nós, nessa transformação verde rumo a
									DESCARBONIZAÇÃO da indústria Brasileira com SUSTENTABILIDADE.
								</p>
								<button
									type="button"
									className="bt bt-outline-primary mt-8 flex items-center"
								>
									<StaticImage
										alt="Ícone de baixar"
										src="../images/play-circle.png"
										className="bt-icon mr-3"
									/>{" "}
									Conheça o projeto
								</button>
							</div>
						</div>
					</div>

					<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
						<video
							muted
							loop
							id="myVideo4"
							className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
						>
							<source src="/img/fourth-slide.mp4" type="video/mp4" />
						</video>

						<div className="bg-gradient-green h-[540px] w-[calc(100vw-15px)]">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 lg:w-[400px]">
									EcoHub de Tecnologia
								</h1>
								<p className="text-green-100 mt-2 lg:w-[580px]">
									Voltado para Agricultura regenerativa e de baixo carbono,
									Indústria 5.0 e Sociabilidade. Gerando o DESENVOLVIMENTO
									SUSTENTÁVEL do estado e das pessoas.
								</p>
								<button
									type="button"
									className="bt bt-outline-primary mt-8 flex items-center"
								>
									<StaticImage
										alt="Ícone de baixar"
										src="../images/play-circle.png"
										className="bt-icon mr-3"
									/>{" "}
									Conheça o projeto
								</button>
							</div>
						</div>
					</div>

					<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
						<video
							muted
							loop
							id="myVideo5"
							className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
						>
							<source src="/img/fifth-slide.mp4" type="video/mp4" />
						</video>

						<div className="bg-gradient-green h-[540px] w-[calc(100vw-15px)]">
							<div className="wrapper-full">
								<h1 className="text-green-100 pt-40 lg:w-[400px]">
									Nossa missão
								</h1>
								<p className="text-green-100 mt-2 lg:w-[580px]">
									Vai além como compromisso socioambiental, com projetos
									voltados para a TRANSFORMAÇÃO das PESSOAS e COMUNIDADE, com
									urbanismo social de verdade.
								</p>
								<button
									type="button"
									className="bt bt-outline-primary mt-8 flex items-center"
								>
									<StaticImage
										alt="Ícone de baixar"
										src="../images/play-circle.png"
										className="bt-icon mr-3"
									/>{" "}
									Conheça o projeto
								</button>
							</div>
						</div>
					</div>
					<div
						id="lastSlide"
						style={{
							display: "none",
						}}
					></div>
				</Slider>
			</header>
			<section className="py-16 shrink-0 grow" ref={ourGroundRef}>
				<div className="flex wrapper-full max-lg:justify-center max-lg:flex-col max-lg:items-center">
					<div className="flex flex-col justify-center max-lg:items-center">
						<h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center text">
							Nossos Lotes sustentáveis
						</h2>
						<p className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
							Todos os lotes já estão equipados com tubulações centrais de
							abastecimento e tratamento de água, rede de coleta dos efluentes
							industriais e sanitários interligados direto na ETAE.
						</p>
					</div>
					{/* <div className="flex flex-col items-center ">
					 */}
					<div
						className="lg:w-[450px] lg:h-[340px] shrink-0 relative flex justify-center
						items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col ml-20"
						onClick={(_) =>
							handleOpenVideo("https://www.youtube.com/embed/FuCpCoSmRBg")
						}
					>
						<p className="text-green-800 font-bold">
							Planta dos Lotes de Venda
						</p>
						<StaticImage
							className="rounded-3xl !w-full border border-green-500 mt-2"
							alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
							src="../images/pbz-render-video-banner.webp"
							layout="fullWidth"
						/>
						<StaticImage
							alt="Ícone de play"
							src="../images/play.svg"
							className="!absolute"
						/>
					</div>
					{/* </div> */}
				</div>
				<div className="wrapper-full">
					<StaticImage
						className="mx-auto block w-fit mt-16 max-lg:!hidden"
						alt="Planta do parque industrial"
						src="../images/ground.svg"
					/>
					<StaticImage
						className="mx-auto block w-full mt-16 lg:!hidden"
						alt="Planta do parque industrial"
						src="../images/map-responsive.png"
						layout="fullWidth"
					/>
					<button
						type="button"
						className="bt bt-outline-primary mx-auto mt-9 flex justify-center items-center max-lg:w-full"
					>
						<StaticImage
							alt="Ícone de baixar"
							src="../images/download.svg"
							className="bt-icon"
						/>{" "}
						<span className="ml-3 text-green-700 font-bold text-lg">
							Baixar prospecto de venda
						</span>
					</button>
				</div>
			</section>
			<section className="bg-colorful py-8 wrapper-full bg-no-repeat bg-center bg-cover">
				<div className="flex max-lg:p-4 max-lg:flex-col bg-white rounded-3xl lg:!p-7 justify-between items-center">
					<div className="max-lg:w-full">
						<div className="relative flex justify-center items-center">
							{activedPreSalesImage === 0 && (
								<StaticImage
									className="rounded-2xl max-lg:w-full lg:w-[658px] lg:h-[367px]"
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-one.jpg"
									layout="fullWidth"
								/>
							)}
							{activedPreSalesImage === 1 && (
								<StaticImage
									className="rounded-2xl w-[658px] h-[367px]"
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-two.jpg"
								/>
							)}
							{activedPreSalesImage === 2 && (
								<StaticImage
									className="rounded-2xl w-[658px] h-[367px]"
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-three.jpg"
								/>
							)}
							<div className="absolute flex justify-between w-full max-lg:px-6 lg:px-7">
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
						<div className="flex pt-7 overflow-x-scroll invisible-scrollbar lg:justify-between">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleClickPreSaleImage(0);
								}}
							>
								<StaticImage
									onClick={() => handleClickPreSaleImage(0)}
									className={`max-lg:w-[140px] lg:w-[203px] rounded-2xl ${
										activedPreSalesImage === 0 &&
										"border-[6px] border-green-700 bg-green-700"
									}`}
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-one.jpg"
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
									className={`max-lg:ml-5 max-lg:w-[140px] lg:w-[203px] rounded-2xl ${
										activedPreSalesImage === 1 &&
										"border-[6px] border-green-700 bg-green-700"
									}`}
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-two.jpg"
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
									className={`max-lg:ml-5 max-lg:w-[140px] lg:w-[203px] rounded-2xl ${
										activedPreSalesImage === 2 &&
										"border-[6px] border-green-700 bg-green-700"
									}`}
									alt="Imagem aerea do projeto. Renderizada"
									src="../images/pre-sales-three.jpg"
								/>
							</a>
						</div>
					</div>
					<div className="w-full">
						<div className="flex flex-col items-center m-auto max-lg:mt-12 wrapper-full">
							<h2 className="text-green-700 text-center">
								Pré lançamento de vendas
							</h2>
							<h3 className="mt-2 text-green-700 font-semibold text-center">
								Investimento em real estate
							</h3>
							<p className="text-center mt-10 text-green-800">
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
							<button
								type="button"
								className="bt bt-primary mt-10 flex justify-center items-center max-lg:w-full"
							>
								<StaticImage
									alt="Ícone de baixar"
									src="../images/send.svg"
									className="bt-icon mr-3"
								/>{" "}
								Entrar em contato
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16" ref={aboutUsRef}>
				<div className="flex wrapper-full items-center max-lg:flex-col">
					<div className="flex flex-col max-lg:text-center max-lg:items-center">
						<h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center">
							SOBRE NÓS
						</h2>
						<h3 className="mt-7 max-lg:text-center text-green-800">
							Centro Sustentável Industrial, Tecnológico e Social
						</h3>
						<p className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
							Nosso Modelo Sustentável de Negócio impulsiona a transformação
							industrial com foco socioambiental, com inovação total em gestão
							de resíduos líquidos, sólidos e gasosos, sendo o primeiro parque
							industrial zero emissões do Brasil. Buscamos equilibrar os
							aspectos econômicos, sociais e ambientais visando criar valor a
							longo prazo para as empresas, sociedade e o meio ambiente.
						</p>
						<button
							type="button"
							className="bt bt-outline-primary mt-4"
							onClick={(_) =>
								window.open(
									"https://drive.google.com/file/d/1Z3TMr33YGgIp8KIRsMeIqpbs5Qt45XY5/view",
									"_blank"
								)
							}
						>
							Saiba mais
						</button>
					</div>
					<div
						className="w-full h-auto lg:w-[450px] lg:h-[340px] shrink-0 lg:ml-20 relative flex justify-center items-center cursor-pointer max-lg:mt-7 flex-col"
						onClick={(_) =>
							handleOpenVideo("https://www.youtube.com/embed/b6SDcbE3y98")
						}
					>
						<p className="text-green-800 font-bold">
							Apresentação do Projeto Total
						</p>
						<StaticImage
							className="rounded-3xl w-full border border-green-500 mt-2"
							alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
							src="../images/pbz-render-video-banner-2.jpg"
							layout="fullWidth"
						/>
						<StaticImage
							alt="Ícone de play"
							src="../images/play.svg"
							className="!absolute"
						/>
					</div>
				</div>

				<div className="flex wrapper-full mt-24 items-center max-lg:flex-col">
					<StaticImage
						alt="Imagem que mostra o plano ESG. (ambiental, social, governança, econômico, tecnológico)"
						src="../images/esg.png"
						className="shrink-0 max-lg:mt-12 w-[300px]"
					/>
					<div className="lg:ml-10 max-lg:text-center">
						<h3 className="text-green-800 max-lg:mt-10">Visão de Liderança</h3>
						<p className="mt-2 text-green-800">
							Nosso Chamado para liderança em sustentabilidade é inspirar,
							motivar e promover uma mudança cultural, acreditamos que impactar
							industrias, pessoas e instituições, é crucial para a construção de
							uma economia regenerativa e a reformulação de um novo mercado com
							foco transversal em sustentabilidade.
						</p>
						<button type="button" className="bt bt-outline-primary mt-4">
							Saiba mais
						</button>
					</div>
					<div
						className="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center
						items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 lg:ml-10 flex-col"
						onClick={(_) =>
							handleOpenVideo("https://www.youtube.com/embed/fL2jcCSN2pc")
						}
					>
						<p className="text-green-800 font-bold">
							Chamado para Sustentabilidade
						</p>
						<StaticImage
							className="rounded-3xl !w-full border border-green-500 mt-2"
							alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
							src="../images/pbz-render-video-banner-3.jpg"
							layout="fullWidth"
						/>
						<StaticImage
							alt="Ícone de play"
							src="../images/play.svg"
							className="!absolute"
						/>
					</div>
				</div>

				<div
					className="wrapper-full flex max-lg:flex-col justify-center lg:justify-between lg:mt-10"
					ref={sustentabilityRef}
				>
					<div className="max-lg:text-center ">
						<h2 className="text-green-800">Sustentabilidade</h2>
						<p className="mt-7 text-green-800">
							Descubra como a adoção de boas práticas e o foco na
							sustentabilidade podem revolucionar o futuro da indústria, das
							pessoas e do planeta.
						</p>
					</div>
					<StaticImage
						alt="Lista de todas as ODS's da ONU"
						src="../images/odss.png"
						className="shrink-0 lg:ml-20 max-lg:mt-12 w-full lg:w-[531px]"
						objectFit="contain"
						layout="fullWidth"
					/>
				</div>
			</section>
			<section className="bg-green-700 w-full lg:h-[362px] xl:h-[420px]">
				<div className="bg-green-800 h-full wrapper-full flex !px-0 max-lg:flex-col lg:justify-center">
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner w-full max-lg:h-80"
							imgClassName="object-left-top"
							alt="Banner do vídeo"
							src="../images/video-one.jpg"
							layout="fullWidth"
						/>
						<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
							<StaticImage
								className="w-6 ml-2"
								alt="Clique aqui para dar play"
								src="../images/play-outline.svg"
							/>
						</a>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Reciclagem Hídrica
							</h3>
							<p className="text-white w-10/12">
								Tratamento total dos efluentes sanitários e industriais
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask ease-in-out transition-all duration-300"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner w-full max-lg:h-80"
							imgClassName="object-left-top"
							layout="fullWidth"
							alt="Banner do vídeo"
							src="../images/video-two.jpg"
						/>
						<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
							<StaticImage
								className="w-6 ml-2"
								alt="Clique aqui para dar play"
								src="../images/play-outline.svg"
							/>
						</a>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Reciclagem Sólidos
							</h3>
							<p className="text-white w-10/12">
								Coletas, troca interna e logística reversa dos recicláveis
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner w-full max-lg:h-80 justify-center items-center"
							imgClassName="object-left-top"
							layout="fullWidth"
							alt="Banner do vídeo"
							src="../images/video-three.jpg"
						/>
						<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
							<StaticImage
								className="w-6 ml-2"
								alt="Clique aqui para dar play"
								src="../images/play-outline.svg"
							/>
						</a>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Neutralização GEE
							</h3>
							<p className="text-white w-10/12">
								Mitigar emissões diretas e neutralizar pegada de carbono
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner w-full max-lg:h-80"
							imgClassName="object-left-top"
							layout="fullWidth"
							alt="Banner do vídeo"
							src="../images/video-four.png"
						/>
						<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
							<StaticImage
								className="w-6 ml-2"
								alt="Clique aqui para dar play"
								src="../images/play-outline.svg"
							/>
						</a>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Matriz Energética
							</h3>
							<p className="text-white w-10/12">
								Produção própria de energia limpa, renovável e acessível
							</p>
						</div>
					</div>
					<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
						<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
						<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
						<StaticImage
							className="shrink-0 card-banner w-full max-lg:h-80"
							imgClassName="object-left-top"
							layout="fullWidth"
							alt="Banner do vídeo"
							src="../images/video-five.jpg"
						/>
						<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
							<StaticImage
								className="w-6 ml-2 bg-center object-center"
								alt="Clique aqui para dar play"
								src="../images/play-outline.svg"
							/>
						</a>
						<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
							<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
								Urbanismo Social
							</h3>
							<p className="text-white w-10/12">
								Desenvolver a comunidade e as pessoas com equidade
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20" ref={netzeroRef}>
				<div className="wrapper-full flex flex-col items-center">
					<div className="flex items-center max-lg:flex-col">
						<div className="flex flex-col max-lg:text-center">
							<h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center">
								NETZERO
							</h2>
							<h3 className="mt-7 max-lg:text-center text-green-800">
								Ambição Net-Zero 2024
							</h3>
							<p className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
								A transição para um futuro sustentável exige que as indústrias e
								instituições assumam um compromisso firme em alcançar a
								neutralidade de carbono, conhecida como Net Zero. Essa meta é
								fundamental para mitigar as mudanças climáticas e garantir a
								preservação do nosso planeta para as gerações futuras.
								<br />
								<br />
								Para atingir essa meta é necessário adotar uma abordagem
								abrangente, considerando os três escopos de emissões definidos
								pelo Protocolo de Gases de Efeito Estufa (GHG).
								<br />
								<br />
								<b className="text-green-800 inline">Escopo 1: </b>Refere-se às
								emissões diretas provenientes das atividades próprias da
								indústria.
								<br />
								<br />
								<b className="text-green-800 inline">Escopo 2: </b>Abrange as
								emissões associadas à energia elétrica adquirida.
								<br />
								<br />
								<b className="text-green-800 inline">Escopo 3: </b>Inclui as
								emissões indiretas de atividades da cadeia de suprimentos e uso
								dos produtos.
								<br />
								<br />O Polo Brasil Zero foi projetado para atender todos os
								escopos, possibilitando um protocolo industrial de Emissões
								Líquidas Zero a partir de 2024.
							</p>
						</div>
						<div
							className="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center
							items-center  max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col"
						>
							<span className="text-green-800 mt-4 font-bold">
								Projeção de emissões de GEE na atmosfera
							</span>
							<img src={netzeroGif} alt="" className="rounded-3xl mt-4" />
							<span className="text-green-800 mt-2">
								Fonte: NASA Scientific Visualization Studio
							</span>
						</div>
					</div>
					<h2
						className="mt-10 pt-10 text-green-800 lg:w-full max-lg:text-center"
						ref={partinersRef}
					>
						Parceiros estratégicos
					</h2>
					<div className="flex mt-16 justify-between w-full max-lg:flex-col items-center">
						<a href="https://www.pactoglobal.org.br/" target="_blank">
							<StaticImage
								alt="Imagem de um parceiro estratégico"
								src="../images/partner-one.png"
								layout="fixed"
							/>
						</a>
						<a
							href="https://www.pactoglobal.org.br/pg/hub-ods/"
							target="_blank"
						>
							<StaticImage
								className="max-lg:mt-10"
								alt="Imagem de um parceiro estratégico"
								src="../images/partner-three.png"
								layout="fixed"
							/>
						</a>
						<a
							href="https://eaesp.fgv.br/centros/centro-estudos-sustentabilidade/projetos/programa-brasileiro-ghg-protocol"
							target="_blank"
						>
							<StaticImage
								className="max-lg:mt-10"
								alt="Imagem de um parceiro estratégico"
								src="../images/partner-two.png"
								layout="fixed"
							/>
						</a>
						<a href="https://www.globalreporting.org/" target="_blank">
							<StaticImage
								className="max-lg:mt-10"
								alt="Imagem de um parceiro estratégico"
								src="../images/partner-four.png"
								layout="fixed"
							/>
						</a>
						<a href="https://sasb.org/" target="_blank">
							<StaticImage
								className="max-lg:mt-10"
								alt="Imagem de um parceiro estratégico"
								src="../images/partner-five.png"
								layout="fixed"
							/>
						</a>
						<a href="https://www.ibgc.org.br/" target="_blank">
							<StaticImage
								className="max-lg:mt-10 w-20"
								alt="Imagem de um parceiro estratégico"
								src="../images/partner-six.png"
								layout="fixed"
							/>
						</a>
					</div>
				</div>
			</section>
			<section className="bg-green-100 py-16" ref={esgRef}>
				<div>
					<h2 className="wrapper-full text-green-800">Agenda ESG</h2>
					<div className="h-[240px] w-full flex justify-center items-center">
						<h3 className="text-green-800">Nenhum post no momento...</h3>
					</div>
					{/* <div className="mt-9 wrapper-full flex justify-between posts-box overflow-x-scroll invisible-scrollbar max-lg:px-8">
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								className="rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
								layout="fullWidth"
							/>
							<h4 className="mt-6 text-green-800">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block text-green-800">
								12 julho 23 - Terrenos
							</span>
						</div>
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								layout="fullWidth"
								className="rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6 text-green-800">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block text-green-800">
								12 julho 23 - Terrenos
							</span>
						</div>
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								layout="fullWidth"
								className="rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6 text-green-800">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block text-green-800">
								12 julho 23 - Terrenos
							</span>
						</div>
						<div className="w-[250px] cursor-pointer">
							<StaticImage
								layout="fullWidth"
								className="rounded-2xl"
								alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
								src="../images/placeholder-hand.png"
							/>
							<h4 className="mt-6 text-green-800">
								Centrais de abastecimento e tratamento de água
							</h4>
							<span className="mt-6 font-semibold block text-green-800">
								12 julho 23 - Terrenos
							</span>
						</div>
					</div> */}
				</div>
			</section>
			<section className="bg-green-700 max-lg:pt-16 lg:py-16" ref={contactRef}>
				<div className="flex items-center max-lg:flex-col wrapper-full">
					<div className="flex flex-col max-lg:flex">
						<h2 className="text-white max-lg:text-center">
							E você? Quer fazer parte do nosso projeto sustentável? Entre em
							contato
						</h2>
						<div className="mt-16 p-3 border-white rounded-md border lg:w-[330px]">
							<StaticImage
								alt="Ícone de email"
								src="../images/mail.svg"
								className="mr-2"
							/>
							<span className="text-white">lhmt@polobrasilzero.com</span>
						</div>
						<div className="mt-4 p-3 border-white rounded-md border lg:w-[330px] flex items-center">
							<StaticImage
								alt="Ícone de endereço"
								src="../images/map.svg"
								className="mr-4 shrink-0 h-[21px]"
							/>
							<span className="text-white block">
								Av. Ayrton Senna da Silva - KM 497 Jardim Industriario, CEP
								78099-499 / Cuiabá - MT
							</span>
						</div>
					</div>
					<div className="flex flex-col shrink-0 max-lg:w-screen lg:w-[600px] p-12 bg-white rounded-2xl lg:ml-20 max-lg:mt-10 max-lg:shadow-2xl">
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
						<Selectable
							label="Tipo de contato:"
							labelClasses="mt-6"
							name="contactType"
							placeholder="Selecione o motivo do contato"
							options={["Comprar um terreno", "Fazer parceria", "Outro motivo"]}
							handleSelectOption={(i: number) => {
								setContactTypeSelectedOption(i);
							}}
							selectedOption={contactTypeSelectedOption}
						/>
						<span className="block mx-auto mt-6 font-medium text-green-800">
							<input
								type="checkbox"
								name="isTermsReaded"
								id="isTermsReaded"
								className="text-green-800"
							/>{" "}
							Declaro que li os termos de uso.
						</span>
						<button
							type="button"
							className="bt bt-primary mx-auto mt-5 flex items-center justify-center"
						>
							<StaticImage
								alt="Ícone de enviar mensagem"
								src="../images/send.svg"
								className="bt-icon mr-3"
							/>
							Enviar
						</button>
					</div>
				</div>
			</section>
			<a
				href="https://wa.me/5511971657007?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+projeto+Polo+Brasil+Zero."
				className="fixed bottom-10 right-10 w-14 h-14 z-50"
			>
				<StaticImage
					alt="Ícone de enviar mensagem pelo whatsapp"
					src="../images/whatsapp-icon.png"
					className=""
				/>
			</a>
			<NewsLetter />
			<Footer
				ourGroundReference={ourGroundRef}
				aboutUsReference={aboutUsRef}
				sustentabilityReference={sustentabilityRef}
				netzeroReference={netzeroRef}
				partinersReference={partinersRef}
				esgReference={esgRef}
				contactReference={contactRef}
			/>
		</>
	);
};

export default IndexPage;
