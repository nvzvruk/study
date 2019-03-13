import React, { Component } from 'react';

export default class ButtonGroup extends Component {
    render() {
        const { buttonsData } = this.props;
        const buttons = buttonsData.map(({ label }, idx) => {
            return(
                <button key={`${label}-${idx}`}
                        type="button"
                        className="btn btn-outline-primary button-group__item">
                    { label }
                </button>
            );
        });

        return(
            <div className="btn-group button-group" role="group" aria-label="Basic example">
                { buttons }
            </div>
        );
    }
}