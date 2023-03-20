import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import axios, {AxiosResponse} from 'axios';
import {FilmResponse} from '../../models/film-response.model';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const getFilms = createAsyncThunk(
  'film/getFilms',
  async (count: string) => {
    const result: AxiosResponse<FilmResponse> = await axios.post(
      `https://swapi-graphql.netlify.app/.netlify/functions/index`,
      `query {
        allFilms(first: ${count}) {
          films {
            id
            title
            director
            releaseDate
          }
        }
      }
      `,
      {
        headers: {
          'Content-Type': 'application/graphql',
        },
      },
    );

    return result.data.data.allFilms.films;
  },
);

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    films: [],
  },
  reducers: {},
  extraReducers: {
    [getFilms.fulfilled.type]: (state, {payload}) => {
      state.films = payload;
    },
    [getFilms.rejected.type]: state => {
      state.films = [];
    },
    [getFilms.pending.type]: () => {},
  },
});

const store = configureStore({
  reducer: {
    film: filmSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat(thunk);
  },
});

export type FilmsState = ReturnType<typeof store.getState>;
export type FilmsDispatch = typeof store.dispatch;

export const useAppDispatch: () => FilmsDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<FilmsState> = useSelector;

export default store;
