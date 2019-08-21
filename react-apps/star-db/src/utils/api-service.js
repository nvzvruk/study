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

    async getAll(entity) {
        const data = await this.getResource(`/${entity}`);
        return await data.results.map(this.transformData);
    }

    async get(entity, id) {
        try {
            const data = await this.getResource(`/${entity}/${id}`);
            switch (entity) {
                case 'planets' : return await this.transformData(data, id);
                default : return await this.transformData(data, id); //
            }
        } catch (e) {
            // console.log(e)
        }
    }

    async transformData ({ name, population, rotation_period, diameter }, id) {
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

const instance = new ApiService();
export default instance;