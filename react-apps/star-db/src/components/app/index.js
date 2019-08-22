import React, { Component } from 'react';
import RandomPlanet from '../random-planet';
import PeoplePage from '../../pages/people-page';

class App extends Component {

    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <div><h1 style={{ color: 'red', textAlign: 'center' }}>Error Occured</h1></div>
        }

        return (
            <div className="app">
                <header className="app-header">
                    <div className="container">
                        <div className="row">
                            <div className="app__logo">Star DB</div>
                        </div>
                        <nav className="app-nav">
                            <ul>
                                <li className="app-nav__item">People</li>
                                <li className="app-nav__item">Planets</li>
                                <li className="app-nav__item">Starships</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <RandomPlanet/>
                        </div>
                    </div>
                </div>
                <main>
                    <PeoplePage/>
                    {/*<PlanePage/>*/}
                    {/*<StarshipPage/>*/}
                </main>
            </div>
        );
    }
}

export default App;
