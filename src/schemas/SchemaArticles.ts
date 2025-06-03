import { Article } from "@/types/article";

interface Schema {
    "@context": string;
    "@type": string;
    "mainEntity": {
        "@type": string;
        "itemListElement": {
            "@type": string;
            "position": number;
            "url": string;
            "name": string;
            "datePublished": string;
        }[];
    };
    "name": string;
    "description": string;
}

const baseSchema: Schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": []
    },
    "name": "Blog",
    "description": "La collection d'articles de blog de Orb Weber sur les sujets tel que la cybersécurité, l'utilité d'un site, le SEO, etc.",
};

const itemListElement = (position: number, url: string, name: string, datePublished: string) => {
    return {
        "@type": "ListItem",
        "position": position,
        "url": url,
        "name": name,
        "datePublished": datePublished
    };
}

export function getSchemaArticles(articles : Article[]) {
    const schema = { ...baseSchema };
    schema.mainEntity.itemListElement = articles.map((article, index) => {
        return itemListElement(index + 1, article.url, article.title.rendered, article.datePublished);
    });
    return schema;
}
