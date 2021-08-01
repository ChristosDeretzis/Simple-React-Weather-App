import React from 'react';
import Button from '../../components/Button/Button';

import classes from './Error.module.css';

const Error = (props) => {
    return (
        <div className={classes.ErrorWrapper}>
            <h1 className={classes.NotFound404}>404</h1>
            <div className={classes.ErrorTextWrapper}>
                <h2 className={classes.NotFoundHeading}>Oops!</h2>
                <p className={classes.NotFoundDetails}>We can't find the city you are looking for.</p>
                <Button
                    name="tryAgain"
                    type="button"
                    position="onErrorNotice"
                    clicked={props.onClickHandler}>Try Again</Button>
            </div>
        </div>
    );
}

export default Error;