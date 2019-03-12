import React from 'react';
import './index.css';

const ButtonIcon = ({type, icon}) => {
    return (
        <button type="button" className={`button-icon btn btn-outline-${type}`}>
            <i className={`fa fa-${icon}`}/>
        </button>
    );
};

export default ButtonIcon;