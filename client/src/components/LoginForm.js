import React, { useState } from 'react';

import { TextField, InputAdornment, IconButton, Button } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { motion } from "framer-motion";

import loginFormStyles from '../componentsStyling/LoginForm'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const classes  = loginFormStyles()

    return (
        <motion.div
            className={classes.root}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 100
            }}
        >
            <div className = { classes.FormContainer}>
                    
                <div className = {classes.HeaderStyle} />
                    
                <div className = { classes.HeaderContainer }>
                    <h2 className = { classes.HeaderText }>Storm Fitness</h2>
                    <h5 className = { classes.SmallText }>Please sign-in to continue!</h5>
                </div>

                <div className = { classes.Fields }>
                    <Formik
                        initialValues = {{
                            email: '',
                            password: ''
                        }}

                        validationSchema = {
                            Yup.object({
                                email: Yup.string()
                                    .email('Invalid email format')
                                    .required('Required !'),
                                password: Yup.string()
                                    .min(8, 'Password is too short - should be 8 characters minimum')
                                    .matches(
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                                        'Invalid'
                                    )
                                    .required('Required !')
                            })
                        }

                        onSubmit = { (values) => { 
                            console.log(values)
                        }}
                    >
                        { formik => (
                            <Form>
                                <Field 
                                    name="email"
                                    className={classes.textField}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="E-mail address"
                                    type="text" 
                                    variant="outlined"
                                    size = "small"
                                    fullWidth 
                                    error={(formik.errors.email && formik.touched.email) ? true : false}
                                    helperText={<ErrorMessage name="email" />}
                                />

                                <Field 
                                    name="password"
                                    className={classes.textField}
                                    as={ TextField }
                                    id="outlined-adornment-password" 
                                    label="Password" 
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    size = "small"
                                    fullWidth 
                                    autoComplete="off"
                                    InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(prev => !prev)}
                                            onMouseDown={(event) => event.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                        </InputAdornment>),
                                    }}
                                    error={(formik.errors.password && formik.touched.password) ? true : false}
                                    helperText={<ErrorMessage name="password" />}
                                />

                                <Button className={classes.button} type="submit" fullWidth>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </motion.div>
    );
};

export default LoginForm;