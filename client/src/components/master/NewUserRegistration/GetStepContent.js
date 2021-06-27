import React from 'react';

import { motion } from "framer-motion";

import GetStepContentStyles from '../../../componentsStyling/master/NewUserRegistration/GetStepContent'
import PersonalDetails from './PersonalDetails';
import HealthDetails from './HealthDetails';
import GymPlan from './GymPlan';

function GetStepContent(props) {
  const classes = GetStepContentStyles()
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
          {
              {
                  0: <PersonalDetails />,
                  1: <HealthDetails />,
                  2: <GymPlan />
              }[props.stepIndex]
          }
      </div>
    </motion.div>
  );
}

export default GetStepContent;
 