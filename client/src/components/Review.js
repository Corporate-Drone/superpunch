import React, { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import { useSelector, useDispatch } from 'react-redux';
import { removeReview } from '../actions/products';

import './_Review.scss'

function Review(props) {
    const { username, body, rating, date, id, productId } = props;
    const [matched, setMatched] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)

    const handleClick = () => {
        dispatch(removeReview(id,productId))
    }

    useEffect(() => {
        if (user && user.username === username) {
            setMatched(true)
        }
    }, [])



    return (
        <div className="Review">
            <div className="Review-detail">
                <div>{username}</div>
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
            {matched && <button onClick={handleClick}>X</button>}
        </div>
    )
}

export default Review
