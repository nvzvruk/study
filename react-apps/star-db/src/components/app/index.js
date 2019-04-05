import React, { Component } from 'react';
import ApiService from '../../utils/api-service';

class App extends Component {

    constructor(props) {
        super(props);

        const { getAllEntities } = ApiService;

        this.state = {
            heroes: {},
            stars: [1, 2, 3]
        };

        this.getAllHeroes = () => {
            getAllEntities(`people`)
                .then(( heroesFromApi ) => {
                    this.setState(() => {
                        return {
                            heroes: heroesFromApi
                        }
                    })
                })
        }
    }

    componentDidMount() {
        this.getAllHeroes();
    }

    render() {
        const { heroes } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    { heroes && Object.keys(heroes).map((hero, idx) => {
                        return <div key={`hero-${idx}`}>{heroes[idx].name}</div>
                    })}
                </header>
            </div>
        );
    }
}

export default App;
