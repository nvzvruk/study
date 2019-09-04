import React, { Component } from 'react';
import ApiService from "../../utils/api-service";
import { PersonList } from "../../components/sw-components";
import ItemDetails, { Record } from '../../components/item-details';
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
                        <PersonList onClick={this.onPersonSelected}/>
                    </div>
                    <div className="col-6">
                        <ItemDetails itemId={this.state.selectedPersonId}
                            getData={this.apiService.getPerson}
                            imageSrc={this.apiService.getImageUrl('characters', this.state.selectedPersonId)}
                        >
                            <Record field="birthYear" label="Birth Year"/>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye color"/>
                        </ItemDetails>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeoplePage;