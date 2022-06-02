import axios from "axios";

// Base da URL:https://api.themoviedb.org/3/
//URL da API:https://api.themoviedb.org/3/movie/now_playing?api_key=53e7b415c1d6dfa7ea09b0184f982457&language=pt-br

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;