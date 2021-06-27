import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { NewUserRegistrationStyles, ColorlibConnector } from '../../../componentsStyling/master/NewUserRegistration/NewUserRegistration' 
import ColorlibStepIcon from './ColorlibStepIcon'
import GetStepContent from './GetStepContent'

function getSteps() {
    return ['Personal Details', 'Health Details', 'Gym Membership'];
}
  
function NewUserRegistration(props) {
    const classes = NewUserRegistrationStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return (
        <div className = {classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                        Reset
                        </Button>
                    </div>
                ) : (
                <div>
                    <GetStepContent stepIndex = {activeStep} />
                    <div>
                        <Button variant="contained" color="primary" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </div>
            )}
      </div>

        </div>
    );
}

export default NewUserRegistration;