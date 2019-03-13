import React from 'react';
import './index.css';

const ButtonIcon = ({kind, icon, type, handleClick, active = false}) => {
    const classNames = `button-icon btn btn${active ? '-' : '-outline-'}${kind}`;
    return (
        <button onClick={handleClick}
            type={type}
            className={classNames}>
            <i className={`fa fa-${icon}`}/>
        </button>
    );
};

export default ButtonIcon;