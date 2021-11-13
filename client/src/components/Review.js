import React, { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import { useSelector, useDispatch } from 'react-redux';
import { removeReview } from '../actions/products';

import './_Review.scss'
import Button from './uiElements/Button';

function Review(props) {
    const { username, body, rating, date, id, productId } = props;
    const [matched, setMatched] = useState(false); //allow user to delete comment
    const [reviewUser, setReviewUser] = useState()
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)

    const handleClick = () => {
        dispatch(removeReview(id,productId))
    }

    useEffect(() => {
        if (user && user.username === username) {
            setMatched(true)
        }

        //set username to logged in user if newly posted comment has undefined user
        if (username == undefined) {
            setReviewUser(user.username)
            setMatched(true)
        } else {
            setReviewUser(username)
            if (user && reviewUser === user.username) {
                setMatched(true)
            }
        }
    }, [])

    return (
        <div className="Review">
            <div className="Review-detail">
                <div>{reviewUser}</div>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'}
                    half={false}
                    edit={false}
                    value={rating}
                    className="Review-detail-star"
                />
                <div>{date}</div>
            </div>
            <div className="Review-body">
                {body}
            </div>
            {matched && <Button onClick={handleClick} text={"X"} />}
        </div>
    )
}

export default Review
