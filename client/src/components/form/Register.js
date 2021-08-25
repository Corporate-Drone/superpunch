import React from 'react'
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

import './_Register.scss'

function Register(props) {
    const { handleClick } = props;

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

                }}

                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(2, 'At least 2 characters required.')
                        .max(15, 'Must be less than 15 characters.')
                        .required("Required"),
                    password: Yup.string()
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


                                <button type="submit" disabled={isSubmitting}>
                                    Register
                                </button>

                            </form>
                        </div>
                    );
                }}
            </Formik>
            <div>Already have an account? <button onClick={handleClick}>Log in</button></div>
        </div>
    )
}

export default Register
