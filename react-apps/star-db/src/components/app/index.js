import React, { Component } from 'react';
import PlanetPage from '../../pages/planet-page';
import ApiService from '../../utils/api-service';

class App extends Component {

    apiServie = new ApiService();

    constructor(props) {
        super(props);

        this.state = {
            persons: [],
            starships: [],
            planets: [],
            activePerson: {},
            activeStarship: {},
            activePlanet: {},
            error: {
                displayError: false,
                title: '',
                message: ''
            }
        };

        this.setActivePerson = async (id) => {
            const person = await this.apiServie.get('people', id);
            this.setState(() => {
                return {
                    activePerson: person
                }
            })
        };

        this.getAllPersons = () => {
            this.apiServie.getAll('people')
                .then(( receivedPersons ) => {
                    this.setState(() => {
                        return {
                            persons: receivedPersons
                        }
                    })
                })
        };

        this.showErrorPopup = (error) => {
            this.setState(() => {
               return { error: { displayError: true, ...error }}
            })
        };

        this.closeErrorPopup = () => {
            this.setState(() => {
                return {
                    error: { displayError: false, title: '', message: '' }
                }
            });
        }
    }

    componentDidMount() {
        this.getAllPersons();
        this.setActivePerson(1);
    }

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
