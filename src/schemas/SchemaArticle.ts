import { Article } from "@/types/article";

export function getSchemaArticle(article : Article) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://orbweber.com/article/${article.id}`
        },
        "headline": article.title.rendered,
        "description": article.yoast_head_json.og_description,
        "author": {
            "@type": "Person",
            "name": "Owais Raza",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Orb Weber Blog",
            "logo": {
                "@type": "ImageObject",
                "url": "https://orbweber.com/static/images/brand-logo.png"
            }
        },
        "datePublished": article.date,
        "dateModified": article.modified
    }
}    
