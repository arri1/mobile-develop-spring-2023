import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Film} from '../../models/film.model';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FilmCard from '../../components/FilmCard';
import {FilmResponse} from '../../models/film-response.model';

const Lab3 = () => {
  const [filmCount, setFilmCount] = useState<string>('1');
  const [filmCountForRequest, setFilmCountForRequest] = useState<string>('1');
  const [filmsData, setFilmsData] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [_, setDummy] = useState(0);

  const getData: () => Promise<Film[] | undefined> = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    let result: AxiosResponse<FilmResponse> | undefined;

    try {
      result = await axios.post(
        `https://swapi-graphql.netlify.app/.netlify/functions/index`,
        `query {
          allFilms(first: ${filmCountForRequest}) {
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
    } catch (error) {
      result = undefined;
    }

    return result?.data.data.allFilms.films;
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => setFilmCountForRequest(filmCount), 1000);
    return () => clearTimeout(timeOutId);
  }, [filmCount]);

  useMemo(async () => {
    const result = await getData();
    setFilmsData(result || []);
    return result;
  }, [filmCountForRequest]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Call rerender"
          onPress={() => {
            setDummy(prev => prev + 1);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Call `getData`"
          onPress={() => {
            getData();
          }}
        />
      </View>
      <Input
        inputMode="decimal"
        placeholder="Количество фильмов"
        value={filmCount}
        onChange={(text: string) => {
          setFilmCount(text);
        }}
      />
      <ScrollView style={{marginBottom: 200}}>
        {filmsData.map((film: Film) => (
          <FilmCard
            key={film.id}
            director={film.director}
            title={film.title}
            releaseDate={film.releaseDate}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
  },
});

export default Lab3;
