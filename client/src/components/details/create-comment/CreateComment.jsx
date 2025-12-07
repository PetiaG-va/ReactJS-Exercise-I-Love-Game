import { useState } from "react"
import request from "../../../utils/requester.js";
import { useParams } from "react-router";

export default function CreateComment({
    user
}) {
    const gameId = useParams();
    const [comment, setComment] = useState('');

    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = async () => {
        await request('/comments', 'POST', {
            author: user.email,
            message: comment,
            gameId,
        });
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea
                    name="comment"
                    onChange={changeHandler}
                    value={comment}
                    placeholder="Comment......"
                    disabled={!user} 
                />
                <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Add Comment"
                    disabled={!user}
                />
            </form>
        </article>
    )
}  