"use client";
import { logPageView } from "@/utils/AnalyticsHelpers";

// Populates the data of personal information: Image and story on about page
interface AboutPersonalProps {
    abouts: {
        image: string;
        story: string;
    }[];
}
export default function AboutPersonal(props : AboutPersonalProps) {
    const abouts = props.abouts;
    logPageView("/about")

    return(
        <div className="about-personal">
            <img className="about-personal-image" src={abouts[0].image} alt="président"/>
            <p className="about-personal-description">{abouts[0].story}</p>
        </div>
    )
}
