import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc/withData';
import ApiService from '../../utils/api-service';

const apiService = new ApiService();

const PersonList = withData(ItemList, apiService.getAllPeople);
const PlanetsList = withData(ItemList, apiService.getAllPlanets);
const StarshipsList = withData(ItemList, apiService.getAllStarships);

export {
    PersonList,
    PlanetsList,
    StarshipsList
}