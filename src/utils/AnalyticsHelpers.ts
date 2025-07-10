"use client";
import ReactGA from "react-ga4";
// Contains helper functions for analytics

// Google Analytics tracking ID
export const GA_TRACKING_ID = "G-M6ZEZPGSEB";

// Initialize Analytics
export function initGA() {
    if (GA_TRACKING_ID) {
        ReactGA.initialize(GA_TRACKING_ID);
    }
}

// Check if the user has given consent for analytics
function getConsent(): boolean {
    if (typeof localStorage !== 'undefined') {
        const consent = localStorage.getItem('user_consent');
        return consent === 'granted';
    }
    return false;
}

// Log a page view
export function logPageView(pageName: string, dimension1 : string = "") {
    if (getConsent()) {
        ReactGA.send({ hitType: "pageview", page: pageName, dimension1: dimension1 });
    }
};

// Log a button click
export function logButtonClick(action : string, label : string) {
    if (getConsent()) {
        ReactGA.event({
            category: 'Button Click',
            action: action,
            label: label
        });
    }
}

// Log a response from backend to check appearance of error
export function backendEventsAnalytics(action : string, label : string, value : number) {
    if (getConsent()) {
        ReactGA.event({
            category: 'backendResponse',
            action: action,
            label: label,
            value: value
        });
    }
}

// Analytics for all other specific events
export function otherEventAnalytics(category : string, action : string, label : string, value : number) {
    if (getConsent()) {
        ReactGA.event({
            category: category,
            action: action,
            label: label,
            value: value
        });
    }
}