import React, { Component } from 'react';
import RandomPlanet from '../../components/random-planet';
import ItemList from "../../components/item-list";

class PlanetPage extends Component {
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
                        <ItemList entity="persons"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanetPage;