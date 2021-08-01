import React from 'react';
import dateformat from 'dateformat';
import Icon from '../../components/Icon/Icon';

import classes from './WeatherDetails.module.css';

const WeatherDetails = (props) => {
    const today = new Date();
    return (
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description} />
            </div>
            <div className={classes.WeatherDataWrapper}>
                <div className={classes.TemperatureWrapper}>
                    {Math.round(props.data.temperature)}<span className={classes.TemperatureSymbol}>°C</span>
                </div>
                <div className={classes.DescriptionWrapper}>
                    {props.data.description}
                </div>
                <div className={classes.DateWrapper}>
                    {dateformat(today, "dddd, mmmm dd")}
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;