import React from 'react'
import ReactStars from 'react-stars'

import './_Review.scss'

function Review() {
    return (
        <div className="Review">
            <div className="Review-detail">
                <div>Name</div>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'}
                    half={false}
                    edit={false}
                    value={3}
                    className="Review-detail-star"
                />
                <div>Date</div>
            </div>
            <div className="Review-body">
                Text body here.
            </div>
        </div>
    )
}

export default Review
