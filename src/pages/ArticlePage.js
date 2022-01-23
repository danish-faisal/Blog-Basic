import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
    const { name } = useParams();

    const article = articles.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />;

    const otherArticles = articles.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph, idx) => {
                return (
                    <p key={idx}>{paragraph}</p>
                );
            })
            }
            <h3>Comments:</h3>
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;