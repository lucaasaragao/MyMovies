import axios from "axios";

const API_KEY = '6cd7d5c4d0899294b8698e6c5bf79d26';
const BASE_URL = 'https://api.themoviedb.org/3/';
const whitBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {

  static getMovies() {
    return axios(whitBaseUrl('movie/popular'));
  }

  static getMoviesDetailsById(id){
    return axios(whitBaseUrl(`movie/${id}`));
  }

}