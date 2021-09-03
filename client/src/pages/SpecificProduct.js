import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import ReactStars from 'react-stars'
import { Carousel } from 'react-responsive-carousel';

import './_SpecificProduct.scss'
import Loader from '../components/uiElements/Loader';
import Review from '../components/Review';
import ReviewForm from '../components/form/ReviewForm';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

function SpecificProduct() {
    const [loading, setLoading] = useState(true);
    const history = useHistory();

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
                    <button>Add To Cart</button>

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
