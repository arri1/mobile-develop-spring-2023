import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Film} from '../../models/film.model';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FilmCard from '../../components/FilmCard';
import {getFilms, useAppDispatch, useAppSelector} from '../../redux/store';

const Lab3 = () => {
  const [filmCount, setFilmCount] = useState<string>('1');
  const [filmCountForRequest, setFilmCountForRequest] = useState<string>('1');
  const [loading, setLoading] = useState<boolean>(false);
  const [_, setDummy] = useState(0);

  const dispatch = useAppDispatch();
  const films = useAppSelector(state => state.film.films);

  const getData: () => Promise<Film[] | undefined> = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const res = await dispatch(getFilms(filmCountForRequest));

    if (res.meta.requestStatus === 'fulfilled') {
      return res.payload as Film[];
    } else {
      return [] as Film[];
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => setFilmCountForRequest(filmCount), 1000);
    return () => clearTimeout(timeOutId);
  }, [filmCount]);

  useMemo(async () => {
    const result = await getData();
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
