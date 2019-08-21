import React, { Component } from 'react';
import RandomPlanet from '../../components/random-planet';

class PlanetPage extends Component {
    render() {
        return(
            <div className="planet-page container">
                <div className="row">
                    <div className="col-12">
                        <RandomPlanet/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanetPage;