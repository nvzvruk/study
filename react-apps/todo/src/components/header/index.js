import React from 'react';

const Header = ({ text, toDoCount, doneCount }) => {

    return (
        <header className="header d-flex justify-content-between align-items-center">
            <h2 className="header__text">{ text }</h2>
            <span className="header__info"> { toDoCount } more to do, { doneCount } done </span>
        </header>
    );
};

export default Header;