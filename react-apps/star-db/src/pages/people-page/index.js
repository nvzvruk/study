import React, { Component } from 'react';
import ErrorBoundary from '../../components/error-boundary';
import Row from '../../components/row';
import { PersonList, PersonDetails } from "../../components/sw-components";

class PeoplePage extends Component {

    state ={
        selectedPersonId: null,
    };

    onPersonSelected = (id) => {
        this.setState({ selectedPersonId: id })
    };

    render() {
        const personList = <PersonList onClick={this.onPersonSelected}/>;
        const personDetails = <ErrorBoundary><PersonDetails itemId={this.state.selectedPersonId}/></ErrorBoundary>;

        return(
            <div className="planet-page container">
                <Row left={personList} right={personDetails}/>
            </div>
        );
    }
}

export default PeoplePage;