import React from 'react';

import { TextField, Button, Grid, Paper } from '@material-ui/core'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import GymPlanStyles from '../../../componentsStyling/master/NewUserRegistration/GymPlan'

const HealthDetails = () => {
    const classes  = GymPlanStyles()

    return (
                <div className = { classes.Fields }>
                    <Formik
                        initialValues = {{
                            plan: '',
                            amountPaid: '',
                        }}

                        validationSchema = {
                            Yup.object({
                                plan: Yup.number()
                                    .required('Required !'),
                                amountPaid: Yup.number()
                                    .required('Required !')
                            })
                        }

                        onSubmit = { (values) => { 
                            console.log(values)
                        }}
                    >
                        { formik => (
                            <Form>
                                <Grid container className={classes.planContainer} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container justify="center" spacing={3}>
                                            <Grid key={1} item>
                                                <Paper className={classes.paper}>
                                                    <h1>500</h1>
                                                </Paper>
                                            </Grid>
                                            <Grid key={2} item>
                                                <Paper className={classes.paper}>
                                                    <h1>600</h1>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Field 
                                    name="amountPaid"
                                    className={`${classes.textField} ${classes.amountPaid}`}
                                    as={ TextField }
                                    id="outlined-basic" 
                                    label="Amount Paid"
                                    type="number" 
                                    variant="outlined"
                                    size="small"
                                    fullWidth 
                                    error={(formik.errors.amountPaid && formik.touched.amountPaid) ? true : false}
                                    helperText={<ErrorMessage name="amountPaid" />}
                                />

                                <Button className={classes.button} type="submit" fullWidth>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
    );
};

export default HealthDetails;