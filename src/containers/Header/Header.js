import React from 'react'

import './Header.css'

const Header = (props) => {
    return (
        <header className="Header">
            <h1 className="Logo" onClick={props.onClickListener}>
                My Header
            </h1>
        </header>
    );
}

export default Header;