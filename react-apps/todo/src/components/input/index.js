import React from 'react';

const SearchInput = ({ placeholder, value, onChange }) => {
    return (
        <input
            className="form-control"
            onChange={ onChange }
            value={ value }
            type="text"
            placeholder={ placeholder }/>
    );
};

export default SearchInput;