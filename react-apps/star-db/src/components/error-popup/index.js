import React, { PureComponent } from 'react';
import './index.css';
class ErrorPopup extends PureComponent {
    render() {
        const { title, message } = this.props;
        return (
            <div className="error-popup alert alert-dimissible alert-danger">
                <button type="button" className="error-popup__close close" onClick={this.close}>
                    &times;
                </button>
                <span className="error-popup__title">{ title }</span>
                <p className="error-popup__message">{ message }</p>
            </div>
        );
    }
}

export default ErrorPopup;