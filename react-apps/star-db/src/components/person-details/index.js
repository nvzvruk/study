
import React, { Component } from 'react';
import ApiService from '../../utils/api-service';
import Spinner from '../spinner';
import PersonDetailsView from './person-details';
import './person-details.css';

export default class PersonDetails extends Component {
    apiService = new ApiService();

    state = {
        selectedPerson: null,
        loading: false
    };

    updateSelectedPerson = (id) => {
        this.apiService.get('people', id)
            .then((person) => this.setState({ selectedPerson: person }))
    };

    componentDidUpdate(prevProps) {
        if(prevProps.personId !== this.props.personId) {
            this.updateSelectedPerson(this.props.personId);
        }
    }

    render() {
        const { loading, selectedPerson } = this.state;

        const placeholder = !selectedPerson && <span className="person-details__placeholder">Choose person to display</span>;
        const loader = loading && <Spinner/>;
        const content = !loading && selectedPerson &&  <PersonDetailsView person={selectedPerson}/>;

        return (
            <>
                {placeholder}
                {loader}
                {content}
            </>
        )
    }
}