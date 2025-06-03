import HeroAnimBG from "@components/Hero/HeroAnimBG";
import ServicesHome from "./home/components/ServicesHome";
import SectionSpacer from "@components/SectionSpacer";
import AboutSection from "./home/components/AboutSection";
import Foot from "@components/Foot";
import "@styles/home.css";
import { homeStructuredData } from "@schemas/SchemaHome";
import Script from "next/script";
import { fetchPageMetadata } from "@utils/metadata";

async function getWindowHome() {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const res = await fetch(`${backendLink}get_window_home`, {
        cache: "no-store",
    });
    return res.json();
}

export async function generateMetadata() {
  const metadata = await fetchPageMetadata("get_window_home"); // Fetch metadata for the home page from your database
  return {
    title: metadata.meta.meta_title,
    description: metadata.meta.meta_description
  };
}

export default async function Home() {
    const windowHome = await getWindowHome();

    return(
        <div className="page hero-page">
            <Script id="schema-page" type="application/ld+json">{JSON.stringify(homeStructuredData)}</Script>
            <HeroAnimBG hero={windowHome.intro} />
            <div className="home-content">
                <ServicesHome servicesHome={windowHome.services_home} />
                <SectionSpacer />
                <AboutSection storyHome={windowHome.story_home} websitesHome={windowHome.websites_home} />
                <Foot />
            </div>
        </div>
    )
}
