import React from 'react';
import ItemList from '../item-list';
import { withData, withApiService } from '../hoc/index';

const withChildRenderFunction = (Comoponent, renderFunction) => (props) => <Comoponent {...props}>{renderFunction}</Comoponent>;

const personRenderFunction = ({ name, gender, birthYear }) => `${name } (${gender}, ${birthYear})`;
const planetRenderFunction = ({ name, climate }) => `${name }, climate: ${climate}`;
const starshipRenderFunction = ({ name, model }) => `${name }, model: ${model}`;

const mapPersonMethodsToProps = ({ getAllPeople }) => ({getData: getAllPeople});
const mapPlanetMethodsToProps = ({ getAllPlanets }) => ({getData: getAllPlanets});
const mapStarshipMethodsToProps = ({ getAllStarships }) => ({getData: getAllStarships});

const PersonList = withApiService(withData(withChildRenderFunction(ItemList, personRenderFunction)), mapPersonMethodsToProps);
const PlanetsList = withApiService(withData(withChildRenderFunction(ItemList, planetRenderFunction)), mapPlanetMethodsToProps);
const StarshipsList = withApiService(withData(withChildRenderFunction(ItemList, starshipRenderFunction)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetsList,
    StarshipsList
}