import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import Button from '../uiElements/Button';
import { registerUser } from '../../actions/auth';
import { RESET_USER } from '../../actions/types';
import './_Register.scss'

function Register(props) {
    const user = useSelector(state => state.auth.user)

    const { handleClick } = props;
    const dispatch = useDispatch();
    const alert = useAlert()

    useEffect(() => {
        if (user === 'fail') {
            alert.error('Authentication failed. Please try again.')

            //reset user fail state
            setTimeout(() => {
                dispatch({
                  type: RESET_USER
              })
              }, 1000);
        }
    }, [user])

    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    passwordtwo: ""
                }}
                onSubmit={async values => {
                    dispatch(registerUser(values.username, values.email, values.password))
                }}

                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(2, 'At least 2 characters required.')
                        .max(15, 'Must be less than 15 characters.')
                        .required("Required"),
                    password: Yup.string()
                        .min(2, 'At least 2 characters required.')
                        .max(15, 'Must be less than 15 characters.')
                        .required("Required"),
                    passwordtwo: Yup.string()
                        .required("Required")
                        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                    email: Yup.string()
                        .email()
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
                        <div className="Register">
                            <form onSubmit={handleSubmit}>
                                <div className="Register-Username">
                                    {/* <label htmlFor="username">
                                    Username
              </label> */}
                                    <input
                                        id="username"
                                        placeholder="Enter your username"
                                        type="text"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.username && touched.username
                                                ? "text-input register-input error"
                                                : "text-input register-input"
                                        }
                                    />
                                    {errors.username && touched.username && (
                                        <div className="input-feedback">{errors.username}</div>
                                    )}
                                </div>

                                <div className="Register-Email">
                                    {/* <label htmlFor="email">
                                    Email
                            </label> */}
                                    <input
                                        id="email"
                                        placeholder="Enter your email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.email && touched.email
                                                ? "text-input register-input error"
                                                : "text-input register-input"
                                        }
                                    />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                </div>

                                <div className="Register-Password">
                                    {/* <label htmlFor="passowrd">Password</label> */}
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        placeholder="Password"
                                        className={
                                            errors.password && touched.password
                                                ? "password-input register-input error"
                                                : "password-input register-input"
                                        }
                                    />
                                    {errors.password && touched.password && (
                                        <span className="input-feedback">
                                            {errors.password}
                                        </span>
                                    )}
                                </div>
                                <div className="Register-PasswordTwo">
                                    {/* <label htmlFor="passowrd">Password</label> */}
                                    <input
                                        type="password"
                                        name="passwordtwo"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.passwordtwo}
                                        placeholder="Password"
                                        className={
                                            errors.passwordtwo && touched.passwordtwo
                                                ? "passwordtwo-input register-input error"
                                                : "passwordtwo-input register-input"
                                        }
                                    />
                                    {errors.passwordtwo && touched.passwordtwo && (
                                        <span className="input-feedback">
                                            {errors.passwordtwo}
                                        </span>
                                    )}
                                </div>


                                <Button type="submit" disabled={isSubmitting} text={"Register"} />

                            </form>
                        </div>
                    );
                }}
            </Formik>
            <div className="Register-ask">Already have an account? <Button onClick={handleClick} text={"Log in"} /></div>
        </div>
    )
}

export default Register
