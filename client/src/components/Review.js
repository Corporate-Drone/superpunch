import React from 'react'
import ReactStars from 'react-stars'

import './_Review.scss'

function Review(props) {
    const { username, body, rating, date } = props;
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
        </div>
    )
}

export default Review
