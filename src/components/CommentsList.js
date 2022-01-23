const CommentsList = ({ comments }) => {
    return (
        <>
            {
                comments.map((comment, idx) => {
                    return (
                        <div className="comment" key={idx}>
                            <h4>{comment.username}</h4>
                            <p>{comment.text}</p>
                        </div>
                    );
                })
            }
        </>
    );
}

export default CommentsList;