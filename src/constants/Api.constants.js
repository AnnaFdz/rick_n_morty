export const API_RM = {
    URL: "https://rickandmortyapi.com/api",

    CHARACTERS : function(page, buscar, status,species,gender ){
        // return `${this.URL}/character`
        return ` ${this.URL}/character?page=${page}&name=${buscar}&status=${status}&species=${species}&gender=${gender}`
    },
    CHARACTERS_BY_ID : function(id){
        return `${this.URL}/character/${id}`
    }
}