import { fetchPageMetadata } from "@utils/metadata";
import Foot from "@components/Foot";
import "@styles/about.css";
import AboutPersonal from "./components/AboutPersonal";
import AboutWebsite from "./components/AboutWebsite";
import Script from "next/script";
import { aboutStructuredData } from "@schemas/SchemaAbout";


interface About {
    abouts_personal: {
        image: string;
        story: string;
    }[];
    websites_about: {
        image: string;
        name: string;
        description: string;
        website: string;
        button_text: string;
    }[];
}

async function getAbout(): Promise<About> {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const res = await fetch(`${backendLink}get_about`, {
        cache: "no-store",
    });
    return res.json();
}

export async function generateMetadata() {
  const metadata = await fetchPageMetadata("get_about"); // Fetch metadata for the home page from your database
  return {
    title: metadata.meta.meta_title,
    description: metadata.meta.meta_description
  };
}

export default async function About() {
    const about = await getAbout();

    return(
        <div>
            <div className="page">
                <div className="about-us-section">
                    <Script id="schema-page" type="application/ld+json">{JSON.stringify(aboutStructuredData)}</Script>
                    <h2 className="txt-cntr">À propos de nous</h2>
                    <AboutPersonal abouts={about.abouts_personal}/>
                    {about.websites_about.length !== 0 && <div className="website-cards-about">
                        {about.websites_about.map((website, index) => (
                            <AboutWebsite key={index} website={website} />
                        ))}
                    </div>}
                </div>
                <Foot />
            </div>
        </div>
    );
}