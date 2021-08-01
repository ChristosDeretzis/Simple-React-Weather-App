import React from 'react';

import classes from './Preview.module.css';

const Preview = (props) => {
    return (
        <img 
            src={require('../../assets/images/Preview.svg').default}
            alt="Weather App icon"
            className={classes.Preview} />
    );
}

export default Preview;