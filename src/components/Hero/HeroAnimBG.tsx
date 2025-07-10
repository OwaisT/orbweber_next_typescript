"use client";
import React from "react";
import "@styles/hero.css"
import useMediaQuery from "@hooks/useMediaQuery";
import Link from "next/link";

interface HeroProps {
    hero: Hero[]
}

interface Hero {
    headline: string,
    subheadline: string,
    button_text: string,
    button_to_page: string,
    image: string
}

// Hero component containing an animated gradient bg, headline, subheadline, button and an image
function HeroAnimBG(props : HeroProps) {

    const heros = props.hero
    const isMobileScreen = useMediaQuery("(max-width: 768px)")

    return(
        <div>
            {heros != null && heros.length !== 0 ? (
                <div className={`hero-section pad-top-50 grdt-bg ${isMobileScreen ? "center" : "hori-flex-cont"}`}>
                    {!isMobileScreen && <HeroHeadSubhead hero={heros[0]} />}
                    <img className={`hero-img slide-in ${isMobileScreen ? "bdr-rad-25" : ""}`} src={heros[0].image} alt="hero-title"/>
                    {isMobileScreen && <HeroHeadSubhead hero={heros[0]} />}
                </div>
            ) : null}
        </div>
    )
}

export default HeroAnimBG;

interface HeroHeadSubheadProps {
    hero: Hero
}

function HeroHeadSubhead(props : HeroHeadSubheadProps) {

    const { hero } = props

    return(
        <div className="hero-head-subhead">
            <h2 className="hero-head slide-in">{hero.headline}</h2>
            <p className="hero-subhead slide-in">{hero.subheadline}</p>
            <Link href={hero.button_to_page} passHref legacyBehavior>
                <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt slide-in">{hero.button_text}</button>
            </Link>
        </div>
    )
}