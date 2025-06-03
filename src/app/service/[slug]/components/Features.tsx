"use client";
import { Feature, Service } from "@/types/service";
import { logButtonClick, logPageView } from "@/utils/AnalyticsHelpers";
import Link from "next/link"

interface FeaturesProps {
    service: Service
}

export default function Features({ service } : FeaturesProps) {
    
    const features = service.features
    const sortedFeatures = features.sort((a, b) => a.order - b.order)
    logPageView("/service/" + service.name);

    return(
        <div className="center w100pcnt">
            <h2 className="txt-cntr txt-clr-prim">{service.price}</h2>
            <h3 className="txt-cntr">Les fonctionnalités de base</h3>
            <div className="features">
                {sortedFeatures.map((feature, index) => (
                    <FeatureCard feature={feature} key={index}/>
                ))}
            </div>
            <Link href={service.button_to_page} passHref legacyBehavior>
                <button className="btn-bg-pr-txt-pr-bg-bdr-pr" onClick={() => {logButtonClick(service.button_text, service.name)}}>
                    {service.button_text}
                </button>
            </Link>
        </div>
    )
}

function FeatureCard(props : { feature: Feature }) {
    const { feature } = props;

    return(
        <div className="feature-card">
            <h4 className="feature-head">{feature.name}</h4>
            <p>{feature.description}</p>
        </div>
    )
}
