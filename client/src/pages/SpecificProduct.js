import React, { useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import ReactStars from 'react-stars'
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'

import './_SpecificProduct.scss'
import Button from '../components/uiElements/Button';
import Loader from '../components/uiElements/Loader';
import Review from '../components/Review';
import ReviewForm from '../components/form/ReviewForm';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { addItem } from '../actions/checkoutItem';
import { getProduct } from '../actions/products';

function SpecificProduct() {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const alert = useAlert()

    const items = useSelector(state => state.checkoutItem.items)
    const product = useSelector(state => state.products.product)
    const loading = useSelector(state => state.products.loading)
    const reviews = useSelector(state => state.products.reviews)

    useEffect(() => {
        dispatch(getProduct(id))
    }, [])

    const handleClick = (buyNow) => {
        if (items.length === 0) {
            dispatch(addItem(product))
            alert.success("Product added to cart!");
            if (buyNow) {
                history.push('/checkout')

            }
        } else {
            for (const item of items) {
                if (item._id === product._id) {
                    alert.show("Product already in cart!");
                    break;
                } else {
                    dispatch(addItem(product))
                    alert.show("Product added to cart!");
                    if (buyNow) {
                        history.push('/checkout')
                    }
                    break;
                }
            }
        }

    }

    let reduxReviews;
    let allImages;
    if (product) {
        reduxReviews = reviews.map(review => (
            <Review
                username={review.user.username}
                body={review.body}
                rating={review.rating}
                date={review.date}
                id={review._id}
                key={review._id}
                productId={id}
            />
        ))
        allImages = product.image.map(img => (
            <div>
                <img src={img} alt={img} />
            </div>
        ))
    }

    return (
        <>
            <div className="SpecificProduct-back"onClick={() => history.push('/shop')}>Back</div>
            {product && !loading && <div className="SpecificProduct">
                <div className="SpecificProduct-images">
                    <Carousel
                        autoPlay={true}
                        showIndicators={false}
                        swipeScrollTolerance={1}
                    >
                        {allImages}
                    </Carousel>
                </div>
                <div className="SpecificProduct-detail">
                    <div className="SpecificProduct-detail-top">
                        <h2>{product.name}</h2>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'}
                            half={false}
                            edit={false}
                            value={product.rating}
                        />
                        <div className="SpecificProduct-detail-price">${product.price}.00</div>
                        <div className="SpecificProduct-detail-buttons">
                            <Button onClick={() => handleClick()} text={"Add To Cart"} />
                            <Button onClick={() => handleClick('buyNow')} text={"Buy Now"} />
                        </div>
                    </div>


                    <div className="SpecificProduct-detail-reviews">
                        <div>
                            <h3>Customer Reviews</h3>
                        </div>
                        <ReviewForm productId={id} />
                        <div className="SpecificProduct-detail-reviews-posted">
                            {reduxReviews}
                        </div>
                    </div>
                </div>

            </div>}
            {loading && <Loader />}
        </>
    )
}

export default SpecificProduct
