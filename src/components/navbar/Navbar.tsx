"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import "@styles/navbar.css";
import useMediaQuery from "@hooks/useMediaQuery";
import ConsentBanner from "../ConsentBanner";

// Navbar component renders the navbar
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isMobileScreen = useMediaQuery("(max-width: 768px)");

    function handleScroll() {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function toggleMenu() {
        if (isMobileScreen) {
            setMenuOpen(!menuOpen);
        }
    }

    return (
        <>
            <div className={`nav nav-fxd ${scrolled ? 'scrld' : ''}`}>
                <Link href="/" className="logo-cont" aria-label="Go to home page"><Logo /></Link>
                <div className="brnd-nm-cont">
                    <h1 className="brnd-nm">ORB WEBER</h1>
                </div>
                {isMobileScreen && <MenuToggle clickFunction={toggleMenu} />}
                <div className={`nav-lnks ${isMobileScreen && "menu"} ${menuOpen && "open"}`}>
                    <Link href="/" onClick={toggleMenu}>Acceuil</Link>
                    <Link href="/services" onClick={toggleMenu}>Nos services</Link>
                    <Link href="/contact" onClick={toggleMenu}>Contactez-nous</Link>
                    <Link href="/about" onClick={toggleMenu}>À propos</Link>
                    <Link href="/blog" onClick={toggleMenu}>Blog</Link>
                </div>
                <ConsentBanner />
            </div>
            {menuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
        </>
    );
}

export default Navbar;

function MenuToggle(props: { clickFunction: () => void }) {
    return (
        <svg onClick={props.clickFunction}
            className="menu-tgl-swtch"
            fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24.75 24.75">
            <g>
                <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
                c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
                c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z" />
            </g>
        </svg>
    );
}