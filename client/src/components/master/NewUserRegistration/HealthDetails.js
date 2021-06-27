import React from 'react';

import { TextField, Button } from '@material-ui/core'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import HealthDetailStyles from '../../../componentsStyling/master/NewUserRegistration/HealthDetails'

const HealthDetails = () => {
    const classes  = HealthDetailStyles()

    return (
                <div className = { classes.Fields }>
                    <Formik
                        initialValues = {{
                            weight: '',
                            height: '',
                            healthProblems: ''
                        }}

                        validationSchema = {
                            Yup.object({
                                weight: Yup.number()
                                    .required('Required !'),
                                height: Yup.number()
                                    .required('Required !'),
                                healthProblems: Yup.string()
                                    .required('Required !'),
                            })
                        }

                        onSubmit = { (values) => { 
                            console.log(values)
                        }}
                    >
                        { formik => (
                            <Form>
                                <Field 
                                    name="weight"
                                    className={`${classes.textField} ${classes.number}`}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="Weight"
                                    type="number" 
                                    variant="outlined"
                                    size="small"
                                    fullWidth 
                                    error={(formik.errors.weight && formik.touched.weight) ? true : false}
                                    helperText={<ErrorMessage name="weight" />}
                                />
                                <Field 
                                    name="height"
                                    className={`${classes.textField} ${classes.number}`}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="Height"
                                    type="number" 
                                    variant="outlined"
                                    size="small"
                                    fullWidth 
                                    error={(formik.errors.height && formik.touched.height) ? true : false}
                                    helperText={<ErrorMessage name="height" />}
                                />
                                <Field 
                                    name="healthProblems"
                                    className={classes.textField}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="Health Problems"
                                    type="text" 
                                    variant="outlined"
                                    size = "small"
                                    fullWidth 
                                    error={(formik.errors.healthProblems && formik.touched.healthProblems) ? true : false}
                                    helperText={<ErrorMessage name="healthProblems" />}
                                />

                                <Button className={classes.button} type="submit" fullWidth>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
    );
};

export default HealthDetails;