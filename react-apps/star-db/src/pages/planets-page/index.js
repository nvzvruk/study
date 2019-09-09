import React, { Component } from 'react';
import ErrorBoundary from '../../components/error-boundary';
import Row from '../../components/row';
import { PlanetsList, PlanetDetails } from "../../components/sw-components";

class PeoplePage extends Component {

    state ={
        selectedPlanetId: null,
    };

    onPlanetSelected = (id) => {
        this.setState({ selectedPlanetId: id })
    };

    render() {
        const planetList = <PlanetsList onClick={this.onPlanetSelected}/>;
        const planetDetails = <ErrorBoundary><PlanetDetails itemId={this.state.selectedPlanetId}/></ErrorBoundary>;

        return(
            <div className="planet-page container">
                <Row left={planetList} right={planetDetails}/>
            </div>
        );
    }
}

export default PeoplePage;