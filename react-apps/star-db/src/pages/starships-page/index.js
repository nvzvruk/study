import React, { Component } from 'react';
import Row from '../../components/row';
import ErrorBoundary from '../../components/error-boundary';
import { StarshipsList, StarshipDetails } from "../../components/sw-components";
class StarshipsPage extends Component {

    state ={
        selectedStarshipId: null,
    };

    onStarshipSelected = (id) => {
        this.setState({ selectedStarshipId: id })
    };

    render() {
        const starshipList = <StarshipsList onClick={this.onStarshipSelected}/>;
        const starshipDetails = <ErrorBoundary><StarshipDetails starshipId={this.state.selectedStarshipId}/></ErrorBoundary>;

        return(
            <div className="planet-page container">
                <Row left={starshipList} right={starshipDetails}/>
            </div>
        );
    }
}

export default StarshipsPage;