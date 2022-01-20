import { useParams } from "react-router";
import articles from "./article-content";

const ArticlePage = ({ match }) => {
    const { name } = useParams();

    const article = articles.find(article => article.name === name);

    if (!article) return <h1>Article does not exist!</h1>;

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, idx) => {
                return (
                    <p key={idx}>{paragraph}</p>
                );
            })
            }
        </>
    );
}

export default ArticlePage;