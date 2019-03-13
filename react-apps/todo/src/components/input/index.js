import React from 'react';

const SearchInput = ({ placeholder }) => {
    return (
        <input type="text" className="form-control" placeholder={ placeholder }/>
    );
};

export default SearchInput;