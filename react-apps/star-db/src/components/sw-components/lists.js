import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc/index';
import ApiService from '../../utils/api-service';

const apiService = new ApiService();

const withChildRenderFunction = (Comoponent, renderFunction) => {
  return (props) => <Comoponent {...props}>{renderFunction}</Comoponent>
};

const personRenderFunction = ({ name, gender, birthYear }) => `${name } (${gender}, ${birthYear})`;
const planetRenderFunction = ({ name, climate }) => `${name }, climate: ${climate}`;
const starshipRenderFunction = ({ name, model }) => `${name }, model: ${model}`;

const PersonList = withData(withChildRenderFunction(ItemList, personRenderFunction), apiService.getAllPeople);
const PlanetsList = withData(withChildRenderFunction(ItemList, planetRenderFunction), apiService.getAllPlanets);
const StarshipsList = withData(withChildRenderFunction(ItemList, starshipRenderFunction), apiService.getAllStarships);

export {
    PersonList,
    PlanetsList,
    StarshipsList
}