import React, { Component } from 'react';
import PlanetPage from '../../pages/planet-page';

class App extends Component {

    render() {
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
                <main>
                    <PlanetPage/>
                </main>
            </div>
        );
    }
}

export default App;
