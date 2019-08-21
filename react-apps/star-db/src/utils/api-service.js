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

    async getAll(entity, onlyResults = true) {
        const data = await this.getResource(`/${entity}`);
        return onlyResults ? data.results : data;
    }

    async get(entity, id) {
        let data = await this.getResource(`/${entity}/${id}`);
        switch (entity) {
            case 'planets' : return await this.transformData(data, id);
            default : return await this.transformData(data, id); //
        }
    }

    transformData ({ name, population, rotation_period, diameter }, id) {
        const imageUrl = getImageUrl('planets', id);
        return {
            name,
            population,
            rotation: rotation_period,
            diameter,
            imageUrl
        }
    }
}

export default ApiService;