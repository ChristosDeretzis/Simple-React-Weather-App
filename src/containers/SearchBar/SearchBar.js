import React from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/Input/Input';


import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <div className={classes.SearchBarWrapper}>
            <InputField 
                type="text"
                name="city"
                label="Location"
                placeholder="Enter a city"
                value={props.value}
                handleChange={props.onChangeHandler}
                error={props.error} />
            <Button
                name="searchSubmit"
                type="submit"
                position="onForm"
                clicked={props.onClickHandler}>Set</Button>
        </div>
    );
};

export default SearchBar;