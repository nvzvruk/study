import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withApiService } from '../hoc';

const PersonDetails = ({ personId, apiService: { getPerson, getImageUrl }}) =>
    <ItemDetails itemId={personId}
                 getData={getPerson}
                 imageSrc={getImageUrl('characters', personId)}>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>;


export default withApiService(PersonDetails);