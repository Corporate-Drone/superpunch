import React, { useState } from 'react'
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReactStars from 'react-stars'
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'

import Button from '../uiElements/Button';
import getDate from '../../javascripts/currentDate'
import './_ReviewForm.scss'
import { addReview } from '../../actions/products'

function ReviewForm(props) {
    const { productId } = props;
    const dispatch = useDispatch();
    const [rating, setRating] = useState();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const alert = useAlert()

    const ratingChanged = (newRating) => {
        setRating(newRating)
    }


    return (
        <div className="ReviewForm">
            <div>Let others know what you think!</div>
            {!isAuthenticated && <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}
                half={false}
                edit={false}
            />}
            {isAuthenticated && <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}
                half={false}
            />}
            <Formik
                initialValues={{
                    review: ""
                }}
                onSubmit={async (values, { resetForm }) => {
                    let date = getDate()
                    if (!rating) {
                        alert.error("Please select a rating.")
                    } else {
                        dispatch(addReview(values.review, date, rating, user._id, productId))
                    }
                
                    resetForm()
                }}

                validationSchema={Yup.object().shape({
                    review: Yup.string()
                        .max(200, 'Must be less than 200 characters.')
                        .required("Required")
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="ReviewForm-text">
                                {isAuthenticated && <textarea
                                    id="review"
                                    type="text"
                                    placeholder="Write your review"
                                    value={values.review}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.review && touched.review
                                            ? "text-input review error"
                                            : "text-input review"
                                    }
                                />}
                                {!isAuthenticated && <textarea
                                    type="text"
                                    placeholder="Please login to write a review."
                                    disabled={true}
                                />}
                                {errors.review && touched.review && (
                                    <div className="input-feedback">{errors.review}</div>
                                )}
                            </div>
                            {isAuthenticated && <Button type="submit" disabled={isSubmitting} text="Submit" className="Button Button-form" text={"Submit"}/>}
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default ReviewForm
