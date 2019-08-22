import { getImageUrl } from "../helpers";

const api_url = 'https://swapi.co/api';

class ApiService {

    async getResource(url) {
        const response = await fetch(`${api_url}${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        return await response.json();
    }

    async getAll(entity, onlyArray = true) {
        const data = await this.getResource(`/${entity}`);
        if(onlyArray) {
            switch (entity) {
                case 'people': return data.results.map(this.__transformPeople);
                case 'planets': return data.results.map(this.__transformPlanet);
                default : return data.results;
            }
        }
        return data;
    }

    async get(entity, id) {
        const data = await this.getResource(`/${entity}/${id}`);
        switch (entity) {
            case 'planets' : return await this.__transformPlanet(data);
            case 'people' : return await this.__transformPeople(data);
            default : return data; //
        }
    }

    getAllPeople = this.getAll.bind(this, 'people');
    getAllPlanets = this.getAll.bind(this, 'planets');
    getAllStarhips = this.getAll.bind(this, 'starhips');

    getPerson = this.get.bind(this, 'people');
    getPlanet = this.get.bind(this, 'planets');
    getStarhip = this.get.bind(this, 'starhips');


    // helper methods

    __extractIdFromUrl(url) {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    };


    // transform data methods

    __transformPlanet = ({ name, population, rotation_period, diameter, url }) => {
        console.log(name)
        const id = this.__extractIdFromUrl(url);
        const imageUrl = getImageUrl('planets', id);
        return {
            id,
            name,
            population,
            rotation: rotation_period,
            diameter,
            imageUrl,
            url
        }
    };

    __transformPeople = ({ name, gender, birth_year, eye_color, url }) => {
        return {
            id: this.__extractIdFromUrl(url),
            name,
            gender,
            birthYear: birth_year,
            eyeColor: eye_color,
        }
    }
}

export default ApiService;