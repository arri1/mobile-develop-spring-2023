import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import scalePixels from '../../helper/pixel-scale.helper';
import {Film} from '../../models/film.model';

interface Props extends Omit<Film, 'id'> {}

const FilmCard = ({director, title, releaseDate}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || 'Нет данных'}</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.producer}>
          Режиссер: {director || 'Нет данных'}
        </Text>
        <Text style={styles.release}>
          Дата выпуска: {releaseDate || 'Нет данных'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#A3AAAE',
  },
  title: {
    fontSize: scalePixels(14),
    fontFamily: 'Roboto-Medium',
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 6,
  },
  bodyContainer: {
    maxHeight: scalePixels(40),
    marginLeft: 10,
    marginBottom: 10,
  },
  producer: {
    color: '#FFFFFF',
    fontSize: scalePixels(10),
    marginBottom: 4,
  },
  release: {
    color: '#FFFFFF',
    fontSize: scalePixels(10),
  },
});

export default FilmCard;
