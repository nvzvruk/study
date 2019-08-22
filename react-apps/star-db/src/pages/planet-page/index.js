import React, { Component } from 'react';
import RandomPlanet from '../../components/random-planet';
import ItemList from "../../components/item-list";
import PersonDetails from '../../components/person-details';

class PlanetPage extends Component {

    state ={
        selectedPersonId: null
    };

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id })
    };

    render() {
        return(
            <div className="planet-page container">
                <div className="row">
                    <div className="col-12">
                        <RandomPlanet/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ItemList entity="persons" onClick={this.onPersonSelected}/>
                    </div>
                    <div className="col-6">
                        <PersonDetails personId={this.state.selectedPersonId}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanetPage;