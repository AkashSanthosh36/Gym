import React from 'react';

import { TextField, Button } from '@material-ui/core'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import PersonalDetailStyles from '../../../componentsStyling/master/NewUserRegistration/PersonalDetails'

const PersonalDetails = () => {
    const classes  = PersonalDetailStyles()

    return (
                <div className = { classes.Fields }>
                    <Formik
                        initialValues = {{
                            name: '',
                            email: '',
                            age: '',
                        }}

                        validationSchema = {
                            Yup.object({
                                name: Yup.string('Name should be a String')
                                    .required('Required !'),
                                email: Yup.string()
                                    .email('Invalid email format')
                                    .required('Required !'),
                                age: Yup.number()
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
                                    name="name"
                                    className={classes.textField}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="Name"
                                    type="text" 
                                    variant="outlined"
                                    size = "small"
                                    fullWidth 
                                    error={(formik.errors.name && formik.touched.name) ? true : false}
                                    helperText={<ErrorMessage name="name" />}
                                />

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
                                    name="age"
                                    className={`${classes.textField} ${classes.age}`}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="Age"
                                    type="number" 
                                    variant="outlined"
                                    size="small"
                                    fullWidth 
                                    error={(formik.errors.age && formik.touched.age) ? true : false}
                                    helperText={<ErrorMessage name="age" />}
                                />

                                <Button className={classes.button} type="submit" fullWidth>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
    );
};

export default PersonalDetails;