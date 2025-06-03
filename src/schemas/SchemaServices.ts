interface OfferedItem {
    schema_name: string;
    description: string;
    schema_price: number;
    button_to_page: string;
}

function organizeItemOffered(offeredItem : OfferedItem) {
    return {
        "@type": "Offer",
        "itemOffered": {
            "@type": "Service",
            "name": offeredItem.schema_name,
            "description": offeredItem.description,
            "offers": {
                "@type": "Offer",
                "price": offeredItem.schema_price,
                "priceCurrency": "EUR",
                "url": "https://www.orbweber.com" + offeredItem.button_to_page
            }
        }
    }
}

export function getServicesStructuredData(offeredItems : OfferedItem[]) {
    const itemListElement = []
    for (const offeredItem of offeredItems) {
        const organizedOfferedItem = organizeItemOffered(offeredItem)
        itemListElement.push(organizedOfferedItem)
    }

    return {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": "Nos Services",
        "itemListElement": itemListElement
    }

}