import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import ReactStars from 'react-stars'
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux'

import './_SpecificProduct.scss'
import Loader from '../components/uiElements/Loader';
import Review from '../components/Review';
import ReviewForm from '../components/form/ReviewForm';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { addItem } from '../actions/checkoutItem';

function SpecificProduct() {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const dummyProduct =
    {
        name: 'Glove1',
        description: 'Glove for boxing. ',
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
        category: 'Boxing Gloves',
        price: 85.00,
        rating: 4,
        id: '806d52d4cd744eeaaa26857d43f8bd4d',
        reviews: [
            {
                username: 'React',
                body: 'https://reactjs.org/',
                rating: 3
            }
        ]
    }

    const handleClick = (buyNow) => {
        //if state.items contains dummy product already
        //windows alert
        //else dispatch
        if (state && state.items && state.items.length !== 0) {
            console.log(state.items)
            for (const item of state.items) {
                if (item.id === dummyProduct.id) {
                    alert("This product is already in your cart!");
                }
            }
        } else {
            dispatch(addItem(dummyProduct))

            if (buyNow) {
                history.push('/checkout')
            }
        }
    }

    return (
        <>
            <div onClick={() => history.push('/shop')}>Back</div>
            <div className="SpecificProduct">
                <div className="SpecificProduct-images">
                    <Carousel
                        autoPlay={true}
                        showIndicators={false}
                        swipeScrollTolerance={1}
                    >
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
                        </div>
                    </Carousel>
                </div>
                <div className="SpecificProduct-detail">
                    <h2>Name</h2>
                    <ReactStars
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        half={false}
                        edit={false}
                        value={4}
                    />
                    <div>$99.00</div>
                    <div className="SpecificProduct-detail-buttons">
                        <button onClick={handleClick}>Add to Cart</button>
                        <button onClick={() => handleClick('buyNow')}>Buy Now</button>
                    </div>


                    <div className="SpecificProduct-detail-reviews">
                        <div>
                            <h3>Customer Reviews</h3>
                        </div>
                        <ReviewForm />
                        <div className="SpecificProduct-detail-reviews-posted"><Review /></div>
                    </div>
                </div>
                {/* {loading && <Loader />} */}
            </div>
        </>
    )
}

export default SpecificProduct
