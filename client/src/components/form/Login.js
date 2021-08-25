import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './_Login.scss'

function Login(props) {
    const {handleClick} = props;
    return (
        <div>
           <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={async values => {
          
        }}

        validationSchema={Yup.object().shape({
          username: Yup.string()
            .required("Required"),
          password: Yup.string()
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
            <div className="Login">
              <form onSubmit={handleSubmit}>
                <div className="Login-Username">
                  <input
                    id="username"
                    placeholder="Enter your username"
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.username && touched.username
                        ? "text-input login-input error"
                        : "text-input login-input"
                    }
                  />
                  {errors.username && touched.username && (
                    <div className="input-feedback">{errors.username}</div>
                  )}
                </div>

                <div className="Login-Password">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    className={
                      errors.password && touched.password
                        ? "password-input login-input error"
                        : "password-input login-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <span className="input-feedback">
                      {errors.password}
                    </span>
                  )}
                </div>


                <button className="Login-Submit" type="submit" disabled={isSubmitting}>
                  Login
            </button>

              </form>
            </div>
          );
        }}
            </Formik>
            <div>Don't have an account? <button onClick={handleClick}>Create one</button></div>
        </div>
    )
}

export default Login
