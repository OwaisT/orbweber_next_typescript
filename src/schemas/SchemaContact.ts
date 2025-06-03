export const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://www.orbweber.com/contact",
    "name": "Nous contacter",
    "description": "Contactez nous pour toutes vos questions",
    "mainEntity": {
        "@type": "Organization",
        "name": "Orb Weber",
        "url": "https://www.orbweber.com",  
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+33-6-86660014",
                "contactType": "Customer Support",
                "areaServed": "FR",
                "availableLanguage": ["English", "French", "Urdu"]
            }
        ]
    }
}  
