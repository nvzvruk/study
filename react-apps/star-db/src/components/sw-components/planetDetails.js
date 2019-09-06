import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withApiService } from '../hoc';

const PlanetDetails = ({ planetId, apiService: { getPlanet, getImageUrl } }) =>
    <ItemDetails itemId={planetId}
                 getData={getPlanet}
                 imageSrc={getImageUrl('planets', planetId)}>
        <Record field="population" label="Population"/>
        <Record field="rotation" label="Rotation"/>
    </ItemDetails>;

export default withApiService(PlanetDetails);