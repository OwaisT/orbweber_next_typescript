"use client";
import React from "react";
import Link from "next/link";

interface OfferServiceProps {
    offerService: {
        image: string;
        headline: string;
        description: string;
        button_to_page: string;
        button_text: string;
    } | null;
}

// Renders services that are part of a certain offer, such as a special promotion or discount
function OfferServices (props : OfferServiceProps) {
    const offer = props.offerService;

    if (!offer) {
        return null; // or return a fallback UI
    }

    return (
        <div className="center mrgn-btm-50">
            <h2 className="mrgn-btm-10 txt-cntr">Offre du moment</h2>
            <div className="card-imglft-txtrgt-90pcnt-400 bg-scnd">
                <img src={offer.image} alt="offer" />
                <div className="card-imglft-txtrgt-90pcnt-400-text-content">
                    <h3 className="mrgn-btm-10">{offer.headline}</h3>
                    <p className="mrgn-top-10 mrgn-btm-10">{offer.description}</p>
                    <Link href={offer.button_to_page} passHref legacyBehavior>
                        <a>
                            <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt">
                                {offer.button_text}
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OfferServices;
