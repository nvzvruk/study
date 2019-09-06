import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withApiService } from '../hoc';

const StarshipDetails = ({ starshipId, apiService: { getStarship, getImageUrl }}) =>
    <ItemDetails itemId={starshipId}
                 getData={getStarship}
                 imageSrc={getImageUrl('starships', starshipId)}>
        <Record field="model" label="Model"/>
        <Record field="class" label="Class"/>
    </ItemDetails>;

export default withApiService(StarshipDetails);