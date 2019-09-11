import ItemList from '../item-list';
import { withData, withApiService, withChildRenderFunction } from '../hoc';
import { compose } from '../../helpers';

const personRenderFunction = ({ name, gender, birthYear }) => `${name } (${gender}, ${birthYear})`;
const planetRenderFunction = ({ name, climate }) => `${name }, climate: ${climate}`;
const starshipRenderFunction = ({ name, model }) => `${name }, model: ${model}`;

const mapPersonMethodsToProps = ({ getAllPeople }) => ({getData: getAllPeople});
const mapPlanetMethodsToProps = ({ getAllPlanets }) => ({getData: getAllPlanets});
const mapStarshipMethodsToProps = ({ getAllStarships }) => ({getData: getAllStarships});

const PersonList = compose(
    withApiService(mapPersonMethodsToProps),
    withData,
    withChildRenderFunction(personRenderFunction)
)(ItemList);

const PlanetsList = compose(
    withApiService(mapPlanetMethodsToProps),
    withData,
    withChildRenderFunction(planetRenderFunction)
)(ItemList);

const StarshipsList = compose(
    withApiService(mapStarshipMethodsToProps),
    withData,
    withChildRenderFunction(starshipRenderFunction)
)(ItemList);

export {
    PersonList,
    PlanetsList,
    StarshipsList
}