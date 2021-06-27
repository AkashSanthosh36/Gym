import React from 'react';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PaymentIcon from '@material-ui/icons/Payment';
import PropTypes from 'prop-types';

import { useColorlibStepIconStyles } from '../../../componentsStyling/master/NewUserRegistration/NewUserRegistration'

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <PersonIcon />,
      2: <DirectionsRunIcon />,
      3: <PaymentIcon />,
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
}
  
ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

export default ColorlibStepIcon;