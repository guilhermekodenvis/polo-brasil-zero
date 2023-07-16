import { PageProps } from "gatsby";
import React from "react";
import { Navbar } from "../components/navbar";
import { NewsLetter } from "../components/news-letter";
import { Footer } from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Textfield } from "../components/textfield";

const ContactPage: React.FC<PageProps> = () => {
	return (
		<>
			<Navbar />
			<div className="bg-contact-page bg-no-repeat bg-cover ">
				<div className="bg-gradient-green h-[530px]">
					<div className="wrapper-full relative">
						<h1 className="absolute top-96 text-white text-6xl">Contato</h1>
					</div>
				</div>
			</div>
			<section>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.092093801612!2d-55.957264564206085!3d-15.664994350078548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939da4ff1434f183%3A0xc8872c9f18cfe22!2sDistrito%20Industrial%2C%20Cuiab%C3%A1%20-%20MT%2C%2078028-630!5e1!3m2!1spt-BR!2sbr!4v1688678500643!5m2!1spt-BR!2sbr"
					width="100%"
					height="560"
					loading="lazy"
				></iframe>
			</section>
			<section className="py-16">
				<div className="wrapper-full flex px-10 justify-between max-lg:flex-col">
					<div className="max-lg:flex max-lg:flex-col max-lg:items-center">
						<h2>Entre em contato</h2>
						<p className="w-[300px] mt-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<div className="flex mt-5">
							<StaticImage
								src="../images/facebook.svg"
								alt="Nossa página no facebook."
							/>
							<StaticImage
								className="ml-4"
								src="../images/linkedin.svg"
								alt="Nossa página no linkedIn."
							/>
							<StaticImage
								className="ml-4"
								src="../images/facebook.svg"
								alt="Nosso perfil no instagram."
							/>
							<StaticImage
								className="ml-4"
								src="../images/tiktok.svg"
								alt="Nosso perfil no TikTok."
							/>
						</div>
					</div>
					<div className="lg:w-3/5 flex shrink-0 flex-col lg:ml-12 max-lg:mt-8">
						<Input name="name" placeholder="Nome completo" />
						<Input name="phone" placeholder="Telefone" inputClasses="mt-8" />
						<Input
							name="email"
							placeholder="Seu melhor e-mail"
							inputClasses="mt-8"
						/>
						<Textfield
							name="message"
							placeholder="Mensagem"
							rows={6}
							textfieldClasses="mt-8"
						/>
						<Button
							text="Enviar mensagem"
							variant="primary"
							buttonClasses="mt-8 !w-full"
						/>
					</div>
				</div>
			</section>
			<NewsLetter />
			<Footer isGreen />
		</>
	);
};

export default ContactPage;
