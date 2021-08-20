import React from 'react';
import headerLogo from '../images/logo1.svg'

function Header() {
    return (
        <header className="header page__header">
            <img className="header__logo" src={headerLogo} alt="Логотип Mesto"></img>
        </header>
    )
}

export default Header;

