import React from 'react';
import SearchInput from '../search-input';
import ButtonGroup from '../button-group';

const SearchPanel = ({ buttonsData }) => {

    return (
        <div className="search-panel container">
            <div className="row">
                <div className="col-8 pl-0 pr-0">
                    <SearchInput placeholder="Type here to search"/>
                </div>
                <div className="d-flex justify-content-end col-4 pl-0 pr-0">
                    <ButtonGroup buttonsData={buttonsData}/>
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;