import Head from "next/head";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Information } from "../components/Information/Information";
import { Pricing } from "../components/Pricing/Pricing";
import { Service } from "../components/Service/Service";
import { getSettings } from "../utils/setting";
import { InferGetStaticPropsType } from "next";

export default function Home({
	navigation,
	hero,
	information,
	about,
	service,
	pricing,
	contact,
	footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<Head>
					<title>Marketing campaigns</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
			</Head>
			<Header {...navigation} />
			<Hero {...hero} />
			<Information {...information} />
			<Service {...service} />
			<About {...about} />
			<Pricing {...pricing} />
			<Contact {...contact} />
			<Footer {...footer} />
		</>
	);
}

export async function getStaticProps() {
	const { navigation, hero, information, about, service, pricing, contact, footer } = getSettings();
	return {
		props: {
			navigation,
			hero,
			information,
			about,
			service,
			pricing,
			contact,
			footer,
		},
	};
}
