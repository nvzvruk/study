import React, { Component } from 'react';
import ItemList from "../../components/item-list";
import PersonDetails from '../../components/person-details';
import ApiService from "../../utils/api-service";

class PeoplePage extends Component {

    apiService = new ApiService();

    state ={
        selectedPersonId: null,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id })
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <div><h1 style={{ color: 'red', textAlign: 'center' }}>Error Occured</h1></div>
        }

        return(
            <div className="planet-page container">
                <div className="row">
                    <div className="col-6">
                        <ItemList getData={this.apiService.getAllPeople}
                                  renderItem={({ name, gender, birthYear }) => `${name } (${gender}, ${birthYear})`}
                                  onClick={this.onPersonSelected}/>
                    </div>
                    <div className="col-6">
                        <PersonDetails personId={this.state.selectedPersonId}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeoplePage;