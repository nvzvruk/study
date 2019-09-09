import React from 'react';
import ItemDetails, { Record } from "../item-details";
import { withApiService } from '../hoc';

const PersonDetails = (props) =>
    <ItemDetails {...props}>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>;

const mapMethodsToProps = ({ getPerson, getPersonImage }) => {
    return {
        getData: getPerson,
        getImage: getPersonImage
    }
};


export default withApiService(PersonDetails, mapMethodsToProps);