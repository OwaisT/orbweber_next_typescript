"use client";
import { otherEventAnalytics } from "@/utils/AnalyticsHelpers";

interface AboutWebsiteProps {
    website: {
        image: string;
        name: string;
        description: string;
        website: string;
        button_text: string;
    };
}
export default function AboutWebsite(props : AboutWebsiteProps) {
    const website = props.website;

    return(
         <div className="card-imglft-txtrgt-90pcnt-400 mrgn-btm-50">
             <img src={website.image} alt={website.name}/>
             <div className="card-imglft-txtrgt-90pcnt-400-text-content">
                 <h3 className="mrgn-btm-10">{website.name}</h3>
                 <p className="mrgn-top-10 mrgn-btm-10">{website.description}</p>
                 <a rel="noreferrer" target="_blank" href={website.website} onClick={() => otherEventAnalytics("External Link", website.name, website.website, 1)}>
                     <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt">{website.button_text}</button>
                </a>
             </div>
         </div>
    )
}