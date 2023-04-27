import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Film} from '../../models/film.model';
import FilmCard from '../../components/FilmCard';
import {gql, useQuery} from '@apollo/client';

const GET_ALL_FILMS = gql`
  query {
    allFilms {
      films {
        id
        title
        director
        releaseDate
      }
    }
  }
`;

const Lab6 = () => {
  const {data, loading} = useQuery(GET_ALL_FILMS);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <ScrollView style={styles.scroll}>
        {data.allFilms.films.map((film: Film) => {
          return (
            <FilmCard
              key={film.id}
              director={film.director}
              title={film.title}
              releaseDate={film.releaseDate}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
  },
  scroll: {
    marginBottom: 15,
  },
});

export default Lab6;
