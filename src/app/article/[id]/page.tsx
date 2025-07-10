import { getSchemaArticle } from '@schemas/SchemaArticle';
import parse from 'html-react-parser';
import Script from 'next/script';
import "@styles/article.css";
import { logPageView } from '@/utils/AnalyticsHelpers';

// Gets the article data from backend using the article ID
async function getArticle(id: string) {
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const data = { article_id : id };
    const res = await fetch(`${backendLink}get_article`, {
        method: 'POST', // or 'PUT', 'PATCH', etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convert the data to JSON
    });
    
    if (!res.ok) {
        throw new Error(`Failed to fetch article with id ${id}`);
    }

    return res.json();
}

// Type definition for the page props
interface PageProps {
    params: Promise<{
        id: string;
    }>
}

// Generates Metadata for the article page
export async function generateMetadata({ params }: PageProps) {
    const { id } = await params;
    const article = await getArticle(id);
    return {
        title: article.title.rendered,
        description: article.yoast_head_json.og_description
    };
}

// Main component for the article page
// Fetches the article data from backend and then populates on frontend
export default async function Article({ params }: PageProps) {
    const { id } = await params;
    
    try {
        const article = await getArticle(id);
        const articleStructuredData = getSchemaArticle(article);

        logPageView("/article/" + id);

        return (
            <div className="page mrgn-30">
                <div className="pad-btm-50 center w100pcnt">
                    <article className="article mrgn-30">
                        <h2 className="txt-cntr mrgn-btm-30">{article.title.rendered}</h2>
                        {parse(article.content.rendered)}
                    </article>
                </div>
                <Script id="schema-page" type="application/ld+json">{JSON.stringify(articleStructuredData)}</Script>
            </div>
        );
    } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
    }
}