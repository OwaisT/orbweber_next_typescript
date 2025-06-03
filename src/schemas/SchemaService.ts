import { Service } from "@/types/service";

export function getServiceStructuredData(offerService : Service) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": offerService.name,
        "description": offerService.packaging,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Orb Weber",
          "url": "https://www.orbweber.com"
        },
        "areaServed": {
          "@type": "Place",
          "name": "France"
        },
        "offers": {
          "@type": "Offer",
          "price": offerService.schema_price,
          "priceCurrency": "EUR",
          "url": "https://www.orbweber.com/contact"
        }
    }
}