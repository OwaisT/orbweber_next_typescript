"use client"
import { useRouter } from 'next/navigation';
import parse from 'html-react-parser';
import { Article } from '@/types/article';

// Populates the data about articles: Title and excerpt on articles page
interface ArticleProps {
    article: Article
}

function ArticleArticles(props: ArticleProps) {
    const router = useRouter();
    const { article } = props;
    
    function navigateToArticle(articleId: string) {
        router.push("/article/" + articleId);
    }

    return (
        <article className="card-head-p-link-50-170" key={article.id} onClick={() => navigateToArticle(article.id)}>
            <h3>{article.title.rendered}</h3>
            {parse(article.excerpt.rendered)}
        </article>
    );
}

export default ArticleArticles;