import HeroImage from "@components/Hero/HeroImage";
import { getServiceStructuredData } from "@schemas/SchemaService";
import Features from "./components/Features";
import Foot from "@components/Foot";
import Terms from "./components/Terms";
import Script from "next/script";
import "@styles/service.css";
import { Service } from "@/types/service";

// Gets the service data from backend based on the slug
async function getService(slug: string) {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const data = { service_name: slug };
    const res = await fetch(`${backendLink}get_service`, {
        method: 'POST', // or 'PUT', 'PATCH', etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convert the data to JSON
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch service with name ${slug}`);
    }

    return res.json();
}

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

// Generates Metadata for the service page
export async function generateMetadata({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = await getService(slug);
    return {
        title: service.meta_title,
        description: service.meta_description
    };
}

// Main service page component
// Gets service data from backend and renders the service page with hero image, features, terms, and structured data
export default async function ServicePage({ params }: ServicePageProps) {
    try {
        const { slug } = await params;
        const service: Service = await getService(slug);
        const structuredData = getServiceStructuredData(service);

        return (
            <div className="page hero-page">
                <div>
                    <HeroImage hero={service} />
                    <Script id="schema-page" type="application/ld+json">{JSON.stringify(structuredData)}</Script>
                    <div className="features-and-terms">
                        <Features service={service} />
                        <Terms steps={service.steps} />
                    </div>
                    <Foot />
                </div>
            </div>
        );
    } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
    }
}