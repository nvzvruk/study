import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withApiService } from '../hoc';

const PlanetDetails = (props) =>
    <ItemDetails {...props}>
        <Record field="population" label="Population"/>
        <Record field="rotation" label="Rotation"/>
    </ItemDetails>;

const mapMethodsToProps = ({ getPlanet, getPlanetImage }) => {
    return {
        getData: getPlanet,
        getImage: getPlanetImage
    }
};

export default withApiService(mapMethodsToProps)(PlanetDetails);