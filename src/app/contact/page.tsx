import Foot from "@components/Foot";
import ContactForm from "./components/ContactForm";
import Script from "next/script";
import { contactStructuredData } from "@schemas/SchemaContact";
import { fetchPageMetadata } from "@utils/metadata";
import "@styles/contact.css"


interface ContactData {
    contact: {
        copy: string;
    };
}

async function getContactPageData(): Promise<ContactData> {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const res = await fetch(`${backendLink}get_contact`, {
        cache: "no-store",
    });
    return res.json();
}

export async function generateMetadata() {
  const metadata = await fetchPageMetadata("get_contact"); // Fetch metadata for the home page from your database
  return {
    title: metadata.meta.meta_title,
    description: metadata.meta.meta_description
  };
}


export default async function Contact() {
    const contactData = await getContactPageData();

    return(
        <div className="page contact-page">
            <h2>Contactez-nous</h2>
            <Script id="schema-page" type="application/ld+json">{JSON.stringify({contactStructuredData})}</Script>
            <ContactForm contactData={contactData}/>
            <Foot/>
        </div>
    );
}
