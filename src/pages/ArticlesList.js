import { Link } from "react-router-dom";
import articles from "./article-content";

const ArticlesList = () => {
    return (
        <>
            <h1>Articles List</h1>
            {
                articles.map((article, idx) => {
                    return (
                        <Link className="article-list-item" key={idx} to={`/article/${article.name}`}>
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0, 150)}...</p>
                        </Link>
                    );
                })
            }
        </>
    );
}

export default ArticlesList;