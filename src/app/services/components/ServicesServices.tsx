"use client";
import React from "react";
import Link from "next/link";
import { logPageView } from "@/utils/AnalyticsHelpers";

interface Service {
    image: string;
    headline: string;
    description: string;
    button_to_page: string;
    button_text: string;
}

interface ServicesServicesProps {
    servicesServices: Service[];
}

// Renders services offered
function ServicesServices(props : ServicesServicesProps) {
    const services = props.servicesServices;
    logPageView("/services");

    return (
        <div className="center mrgn-btm-50">
            <h2 className="mrgn-btm-10 txt-cntr">Nos services</h2>
            {services.map((service, index) => (
                <ServiceServices key={index} service={service} />
            ))}
        </div>
    );
};

export default ServicesServices;

function ServiceServices(props : { service: Service }) {
    const service = props.service;

    return (
        <div className="card-imglft-txtrgt-90pcnt-400 mrgn-btm-50">
            <img src={service.image} alt="offer" />
            <div className="card-imglft-txtrgt-90pcnt-400-text-content">
                <h3 className="mrgn-btm-10">{service.headline}</h3>
                <p className="mrgn-top-10 mrgn-btm-10">{service.description}</p>
                <Link href={service.button_to_page} passHref legacyBehavior>
                    <a>
                        <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt">
                            {service.button_text}
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    );
};