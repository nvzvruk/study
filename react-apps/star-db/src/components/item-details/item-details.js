import React, { Component } from 'react';
import ApiService from '../../utils/api-service';
import Spinner from '../spinner';
import './item-details.css';

export const Record = ({ item, field, label }) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
};

export default class ItemDetails extends Component {
    apiService = new ApiService();

    state = {
        item: null,
        loading: false
    };

    updateItem = (id) => {
        this.setState({ loading: true });
        this.props.getData(id)
            .then((item) => this.setState({ item, loading: false }));
    };

    componentDidUpdate(prevProps) {
        if(prevProps.itemId !== this.props.itemId) {
            this.updateItem(this.props.itemId);
        }
    }

    render() {
        const { loading, item } = this.state;
        const placeholder = !item && <span className="person-details__placeholder">Choose person to display</span>;
        const loader = loading && <Spinner/>;
        const content = !loading && item &&  
            <div className="person-details card">
                <img className="person-image"
                    src={this.props.imageSrc}
                    alt="selected person"/>
                 <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, child => React.cloneElement(child, { item }))}
                    </ul>
                </div>
            </div>;

        return (
            <>
                {placeholder}
                {loader}
                {content}
            </>
        )
    }
}