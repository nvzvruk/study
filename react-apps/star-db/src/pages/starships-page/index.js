import React, { Component } from 'react';
import ApiService from "../../utils/api-service";
import ItemList from "../../components/item-list";
import ItemDetails, { Record } from '../../components/item-details';
class StarshipsPage extends Component {

    apiService = new ApiService();

    state ={
        selectedStarshipId: null,
        hasError: false
    };

    onStarshipSelected = (id) => {
        this.setState({ selectedStarshipId: id })
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
                        <ItemList getData={this.apiService.getAllStarships}
                                  renderItem={({ name }) => `${name })`}
                                  onClick={this.onStarshipSelected}/>
                    </div>
                    <div className="col-6">
                        <ItemDetails itemId={this.state.selectedStarshipId}
                            getData={this.apiService.getStarhip}
                            imageSrc={this.apiService.getImageUrl('starships', this.state.selectedStarshipId)}
                        >
                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="cost" label="Cost"/>
                        </ItemDetails>
                    </div>
                </div>
            </div>
        );
    }
}

export default StarshipsPage;