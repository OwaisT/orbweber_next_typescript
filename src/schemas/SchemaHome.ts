const businessSchema = {
    "@type": "LocalBusiness",
    "name": "Orb Weber",
    "url": "https://www.orbweber.com",
    "logo": "https://orbweber.com/static/images/brand-logo.png",
    "description": "Créateur de systèmes numériques : site web, SEO, automations de systèmes (telle que logistique, management etc.)",
    "telephone": "+33-6-86660014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "27 Boulevard Charles Vaillant",
      "addressLocality": "Tremblay-en-france",
      "addressRegion": "Île-de-France",
      "postalCode": "93290",
      "addressCountry": "FR"
    },
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61557191324359",
        "https://www.instagram.com/orbweber/"
    ]
}

const websiteStructureSchema = {
    "@type": "breadcrumblist",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.orbweber.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.orbweber.com/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Services",
            "item": "https://www.orbweber.com/service/*"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Services",
            "item": "https://www.orbweber.com/contact"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": "Services",
            "item": "https://www.orbweber.com/about"
        }
    ]
}

// const offer1StructuredData = {
//     "@type": "Offer",
//     "itemOffered": {
//         "@type": "Service",
//         "name": "Création de site vitrine"
//     },
//     "price": "600.00",
//     "priceCurrency": "EUR"
// }

export const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [ 
        businessSchema,
        websiteStructureSchema
    ]
}

// export function HomeStructuredData() {
//     return homeStructuredData
// }

