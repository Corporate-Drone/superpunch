import React from 'react'
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReactStars from 'react-stars'



import './_ReviewForm.scss'

function ReviewForm() {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }


    return (
        <div className="ReviewForm">
            <div>Let others know what you think!</div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}
                half={false}
            />
            <Formik
                initialValues={{
                    review: ""
                }}
                onSubmit={async values => {
                    console.log('submit')
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
                                {/* <label htmlFor="first">
                                    First Name
                                </label> */}
                                <textarea
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
                                />
                                {errors.review && touched.review && (
                                    <div className="input-feedback">{errors.review}</div>
                                )}
                            </div>
                            <button type="submit" disabled={isSubmitting} text="Submit" className="Button Button-form">Submit</button>
                            {/* <Button type="submit" disabled={isSubmitting} text="Submit" className="Button Button-form"/> */}
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default ReviewForm
