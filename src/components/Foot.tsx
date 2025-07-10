import React from "react";
import { FB, Insta, LinkedIn } from "./SMLogos";

// Footer conponent containing Brand name and social links
function Foot() {
    return(
        <div className="foot">
            <p>Orb Weber</p>
            <div className="sm-logos">
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=61557191324359" aria-label="visit our facebook page">
                    <FB/>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/orbweber/" aria-label="visit our instagram account">
                    <Insta/>
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/orb-weber" aria-label="visit our linkedin profile">
                    <LinkedIn/>
                </a>
            </div>
        </div>
    )

}

export default Foot;
