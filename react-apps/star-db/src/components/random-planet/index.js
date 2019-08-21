import React, { Component, Fragment } from 'react';
import Spinner from '../../components/spinner';
import ApiService from "../../utils/api-service";
import { randomInteger } from '../../helpers';
import ErrorPopup from "../error-popup";
import './index.css';

const planetCount = 10; // must be all planets count;

const PlanetView = ({planet: { name, population, rotation, diameter, imageUrl }}) => {
    return(
        <Fragment>
            <div className="planet__image-wrapper">
                <img src={imageUrl}
                     alt={`planet-${name}`}
                     className="planet__image"/>
            </div>
            <div className="planet__info">
                <span className="planet__name">{name}</span>
                <span className="planet__population">Population: {population}</span>
                <span className="planet__rotation">Rotation period: {rotation}</span>
                <span className="planet__diameter">Diameter: {diameter}</span>
            </div>
        </Fragment>
    );
};

class RandomPlanet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planet : {
                name: '',
                population: '',
                rotation: '',
                diameter: '',
                imageUrl: ''
            },
            error: {
                displayError: false,
                title: '',
                message: ''
            },
            loading: false,
        };

        this.showSpinner = () => {
            this.setState(() => {
                return {
                    loading: true
                }
            });
        };

        this.onPlanetLoadFail = (error) => {
            this.setState(() => {
                return {
                    error : {
                        title: 'sasi',
                        message: 'pisos',
                    },
                    loading: false
                }
            });
        };

        this.onPlanetLoadSuccess = (planet) => {
            this.setState(() => {
                return {
                    planet,
                    loading: false
                }
            });
        };

        this.updatePlanet = async (id) => {
            this.showSpinner();
            ApiService.get('planets', id)
                .then((result) => {
                    this.onPlanetLoaded(result);
                })
                .catch((error) => {
                    this.onPlanetLoadFail(error);
                });
        };
    }

    async componentDidMount() {
        await this.updatePlanet(randomInteger(1232131, planetCount));
    }

    render() {
        const { planet, loading, error } = this.state;
        const spinner = loading && <Spinner/>;
        const errorMessage = error && <ErrorPopup title={error.title} message={error.message}/>;
        const content = !loading &&  <PlanetView planet={ planet }/>;
        return(
            <div className="planet jumbotron">
                { spinner }
                { errorMessage }
                { content }
            </div>
        );
    }
}

export default RandomPlanet;