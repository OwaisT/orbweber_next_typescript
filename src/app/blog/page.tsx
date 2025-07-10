import { fetchPageMetadata } from "@utils/metadata";
import ArticleArticles from "./components/ArticleArticles";
import { getSchemaArticles } from "@schemas/SchemaArticles";
import Script from "next/script";
import { Article } from "@/types/article";
import { PageViewLog } from "@/components/AnalyticsLoggers";

// Gets the articles from backend
async function getArticles(): Promise<Article[]> {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const res = await fetch(`${backendLink}get_articles`, {
        cache: "no-store",
    });
    return res.json();
}

// Generates Metadata for the page
export async function generateMetadata() {
    const metadata = await fetchPageMetadata("get_blog_meta"); // Fetch metadata for the home page from your database
    return {
        title: metadata.meta_title,
        description: metadata.meta_description
    };
}

// Main component for the blog page
// Gets the articles and then populates them in a specific manner on frontend
export default async function Articles() {
    const articles = await getArticles();
    const articlesSctructuredData = getSchemaArticles(articles);

    return(
        <div>
            <div className="page">
                <h2 className="txt-cntr">Blog</h2>
                <Script id="schema-page" type="application/ld+json">{JSON.stringify(articlesSctructuredData)}</Script>
                <div className="articles">
                    {articles.map((article, index) => (
                        <ArticleArticles key={index} article={article} />
                    ))}
                </div>
                <PageViewLog pageName="/blog" dimension1="Blog" />
            </div>
        </div>
    );
}