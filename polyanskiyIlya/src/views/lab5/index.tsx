import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../redux/store';
import scalePixels from '../../helper/pixel-scale.helper';

const Lab5 = () => {
  const films = useAppSelector(state => state.film.films);

  return (
    <View>
      <Text style={styles.label}>
        Текущее количество фильмов в store: {films.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: scalePixels(12),
    color: '#FFFFFF',
    margin: 16,
  },
});

export default Lab5;
