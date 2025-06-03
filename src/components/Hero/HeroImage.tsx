"use client";
import React from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import "@styles/hero.css";

interface HeroProps {
    hero: Hero;
}

interface Hero {
    image: string;
    headline: string;
}

function HeroImage(props : HeroProps) {

    const { hero } = props;
    const isMobileScreen = useMediaQuery("(max-width: 768px)");

    return (
        <div className={`hero-section w100pcnt bg-prim ${isMobileScreen && "pad-btm-50"}`}>
            <img className="hero-bg-img w100pcnt" src={hero.image} alt="hero"/>
            <HeroHeadSubhead headline={hero.headline}/>
        </div>
    );
}

export default HeroImage;

interface HeroHeadSubheadProps {
    headline: string;
}

function HeroHeadSubhead(props : HeroHeadSubheadProps) {

    return(
        <div className="hero-head-subhead">
            <h2 className="hero-head slide-in">{props.headline}</h2>
        </div>
    )
}