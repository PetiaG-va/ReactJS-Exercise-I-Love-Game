import { useEffect, useState } from "react"
import { useParams } from "react-router"
import request from "../../../utils/requester.js";

export default function DetailsComments() {
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        request(`/comments`)
            .then(result => {
                const gameComments = Object.values(result).filter(comment => comment.gameId === gameId);
                setComments(gameComments);
            })
    }, [gameId])

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id} className="comment">
                        <p>{comment.author}: {comment.message}</p>
                    </li>

                ))}
            </ul>
            {comments.length === 0 && (
                <p class="no-comment">No comments.</p>
            )}
        </div>
    )
}