import {Film} from './film.model';

export interface FilmResponse {
  data: {
    allFilms: {
      films: Film[];
    };
  };
}
