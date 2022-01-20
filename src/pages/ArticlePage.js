import { useParams } from "react-router";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlePage = () => {
    const { name } = useParams();

    const article = articles.find(article => article.name === name);

    if (!article) return <h1>Article does not exist!</h1>;

    const otherArticles = articles.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, idx) => {
                return (
                    <p key={idx}>{paragraph}</p>
                );
            })
            }
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;