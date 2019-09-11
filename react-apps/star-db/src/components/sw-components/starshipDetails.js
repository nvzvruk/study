import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withApiService } from '../hoc';

const StarshipDetails = (props) =>
    <ItemDetails {...props}>
        <Record field="model" label="Model"/>
        <Record field="class" label="Class"/>
    </ItemDetails>;

const mapMethodsToProps = ({ getStarship, getStarshipImage }) => {
    return {
        getData: getStarship,
        getImage: getStarshipImage
    }
};

export default withApiService(mapMethodsToProps)(StarshipDetails);