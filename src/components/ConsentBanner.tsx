"use client";
import React, { useEffect, useState } from "react";
import "@styles/consentBanner.css";
import { initGA } from "@/utils/AnalyticsHelpers";

export default function ConsentBanner() {
    const consentText = "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience. Vous pouvez accepter ou refuser leur utilisation selon vos préférences.";
    const [showBanner, setShowBanner] = useState<boolean>(false);

    const handleConsent = (consent: boolean) => {
        localStorage.setItem('user_consent', consent ? 'granted' : 'denied');
        if (consent) {
            initGA();
        }
        setShowBanner(false);
    };

    useEffect(() => {
        const userConsent = localStorage.getItem('user_consent');
        if (!userConsent) {
            setShowBanner(true); // Show banner if no consent is stored
        }
        if (userConsent === 'granted') {
            initGA();
        }
    }, []);

    if (!showBanner) return null;

    return (
        <div className="consent-banner">
            <p>{consentText}</p>
            <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt" onClick={() => handleConsent(true)}>Accepter</button>
            <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt" onClick={() => handleConsent(false)}>Refuser</button>
        </div>
    );
};
