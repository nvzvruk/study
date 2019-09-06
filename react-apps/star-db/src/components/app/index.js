import React, { Component } from 'react';
import { ApiServiceProvider } from "../api-service-context";
import ApiService from '../../utils/api-service';
import RandomPlanet from '../random-planet';
import PeoplePage from '../../pages/people-page';
import StarshipsPage from '../../pages/starships-page';
import PlanetPage from '../../pages/planets-page';

const apiService = new ApiService();
class App extends Component {

    render() {

        return (
            <div className="app">
                <ApiServiceProvider value={apiService}>
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
                        <StarshipsPage/>
                        <PlanetPage/>
                    </main>
                </ApiServiceProvider>
            </div>
        );
    }
}

export default App;
