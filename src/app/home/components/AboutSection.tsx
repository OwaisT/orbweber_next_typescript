"use client";
import React from "react";
import { splitAndPopSeparator } from "@utils/Helpers";
import { logPageView, otherEventAnalytics } from "@/utils/AnalyticsHelpers";

interface AboutSectionProps {
    storyHome: string;
    websitesHome: Array<{
        image: string;
        name: string;
        website: string;
        button_text_home: string;
    }>;
}

function AboutSection({ storyHome, websitesHome } : AboutSectionProps) {
    const stories = splitAndPopSeparator(storyHome, "\n");
    logPageView("/");

    return (
        <div className="about-section">
            <div className="about-text-content">
                <h3 className="mrgn-btm-10">À propos de nous</h3>
                {stories.length !== 0 && <StoriesHome stories={stories} />}
            </div>
            {websitesHome.length !== 0 && (
                <div className="portfolio-home">
                    {websitesHome.map((website, index) => (
                        <WebsitePortfolioHome key={index} website={website} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AboutSection;

interface WebsitePortfolioHomeProps {
    website: {
        image: string;
        name: string;
        website: string;
        button_text_home: string;
    };
}

function WebsitePortfolioHome({ website } : WebsitePortfolioHomeProps) {
    return (
        <div className="website-portfolio-home">
            <img src={website.image} alt={website.name} />
            <h4 className="mrgn-top-10">{website.name}</h4>
            <a
                rel="noreferrer"
                target="_blank"
                href={website.website}
                onClick={() => otherEventAnalytics("External Link", website.name, website.website, 1)}
            >
                <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt">
                    {website.button_text_home}
                </button>
            </a>
        </div>
    );
};

interface StoriesHomeProps {
    stories: string[];
}

function StoriesHome({ stories } : StoriesHomeProps) {
    return (
        <div>
            {stories.map((story, index) => (
                <p key={index} className="about-story-home">
                    {story}
                </p>
            ))}
        </div>
    );
};