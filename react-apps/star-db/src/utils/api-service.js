const api_url = 'https://swapi.co/api';
const imageUrl = 'https://starwars-visualguide.com/assets/img/';

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
                case 'starships': return data.results.map(this.__transformStarship);
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
            case 'starships' : return await this.__transformStarship(data);
            default : return data; //
        }
    }

    getAllPeople = this.getAll.bind(this, 'people');
    getAllPlanets = this.getAll.bind(this, 'planets');
    getAllStarships = this.getAll.bind(this, 'starships');

    getPerson = this.get.bind(this, 'people');
    getPlanet = this.get.bind(this, 'planets');
    getStarship = this.get.bind(this, 'starships');


    // helper methods

    __extractIdFromUrl(url) {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    };


    // transform data methods

    __transformPlanet = ({ name, population, rotation_period, diameter, url, climate }) => {
        const id = this.__extractIdFromUrl(url);
        const imageUrl = this.getImageUrl('planets', id);
        return {
            id,
            name,
            population,
            rotation: rotation_period,
            diameter,
            imageUrl,
            url,
            climate
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
    };

    __transformStarship = (item) => {
        return {
            id: this.__extractIdFromUrl(item.url),
            name: item.name,
            model: item.model,
            class: item.starship_class
        };
    };

    getImageUrl = (entity, id) => {
        // entity = 'characters' || 'starships' || 'planets'
        return `${imageUrl}/${entity}/${id}.jpg`;
    };
}

export default ApiService;