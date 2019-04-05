const api_url = 'https://swapi.co/api';

class ApiService {

    async getAllEntities (url) {
        const response = await fetch(`${api_url}/${url}`);

        if(!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }

        const result = await response.json();

        return result.results;
    }
}

const instance = new ApiService();
export default instance;