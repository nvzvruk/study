import React, { Fragment } from 'react';
import Spinner from '../../components/spinner';
import ApiService from "../../utils/api-service";
import { randomInteger } from '../../helpers';
import './index.css';

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

class RandomPlanet extends React.PureComponent {

    apiService = new ApiService();

    constructor(props) {
        super(props);

        this.state = {
            planetsCount: 0,
            planet : {
                name: '',
                population: '',
                rotation: '',
                diameter: '',
                imageUrl: ''
            },
            loading: true,
            error: {
                display: false,
                title: '',
                message: ''
            }
        };

        this.showSpinner = () => this.setState((prevState) => (
            {
                ...prevState,
                loading: true
            }
        ));

        this.hideError = () => {
            this.setState(prevState => ({
                ...prevState,
                error: {
                    display: false,
                    title: '',
                    message: ''
                }
            }));
        }

        this.onPlanetLoadFail = (error) => {
            this.setState(prevState => ({
                ...prevState,
                loading: false,
                error: {
                    display: true,
                    title: 'oops',
                    message: 'somethimng went wrong'
                }
            }));
        };

        this.onPlanetLoadSuccess = (planet) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    planet,
                    loading: false
                }
            });
        };

        this.updatePlanet = async (id) => {
            this.showSpinner();
            this.apiService
                .get('planets', id)
                .then(this.onPlanetLoadSuccess)
                .catch(this.onPlanetLoadFail);
        };

        this.getPlanetsCount = async () => {
            try {
                const planetsObj = await this.apiService.getAll('planets', false);
                this.setState((prevState) => {
                return {
                    ...prevState,
                    planetsCount: planetsObj.count
                }});
            }
            catch (e) {
                //handle error
            }
        }
    }

    async componentDidMount() {
        await this.getPlanetsCount();
        await this.updatePlanet(randomInteger(1, this.state.planetsCount));
    }

    render() {
        const { planet, loading, error } = this.state;
        const dataExist = !(loading || error.display);
        const spinner = loading && <Spinner/>;
        const content = dataExist && <PlanetView planet={ planet }/>;
        return(
            <div className="planet jumbotron">
                { spinner }
                { content }
            </div>
        );
    }
}

export default RandomPlanet;