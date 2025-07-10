import Foot from "@components/Foot";
import OfferServices from "./components/OfferServices";
import ServicesServices from "./components/ServicesServices";
import { fetchPageMetadata } from "@utils/metadata";
import Script from "next/script";
import { getServicesStructuredData } from "@schemas/SchemaServices";

// Gets services from backend
async function getServices() {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const res = await fetch(`${backendLink}get_services`, {
        cache: "no-store",
    });
    return res.json();
}

// Generates metadata for the page
export async function generateMetadata() {
      const metadata = await fetchPageMetadata("get_services"); // Fetch metadata for the home page from your database
      return {
        title: metadata.meta.meta_title,
        description: metadata.meta.meta_description
      };
}

// Main services page component
// Gets services data from backend, and renders services that are part of an offer and others separately
export default async function Services() {
    const services = await getServices();
    const servicesStruturedData = getServicesStructuredData(services.offer_services.concat(services.services_services));
    console.log(services.services_services);
    
    return(
        <div className="page">
            <div>
                <Script id="schema-page" type="application/ld+json">{JSON.stringify(servicesStruturedData)}</Script>
                <OfferServices offerService={services.offer_services ? services.offer_services[0] : null} />
                <ServicesServices servicesServices={services.services_services} />
                <Foot />
            </div>
        </div>
    );
}