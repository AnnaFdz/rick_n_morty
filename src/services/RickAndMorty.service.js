import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {
    async getAllCharacters(page, buscar, status,species,gender){
        const response = await fetch(API_RM.CHARACTERS(page, buscar, status,species,gender));
        //Interseptor
        return response.json();
    }
    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTERS_BY_ID(id));
        //Interseptor
        return response.json();
    }
}
export default new RickAndMortyService();