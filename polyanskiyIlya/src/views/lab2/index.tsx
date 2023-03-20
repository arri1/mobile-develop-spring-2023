import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Input from '../../components/Input';

const Lab2 = () => {
  const [catPhrase, setCatPhrase] = useState('Hellow World!');
  const [catPhraseURL, setCatPhraseURL] = useState(
    'https://cataas.com/cat/says/Hellow World!',
  );

  useEffect(() => {
    // пародия на debounce time
    const timeOutId = setTimeout(
      () =>
        setCatPhraseURL(
          // time=new Date() - костыль для избежания кэширования
          `https://cataas.com/cat/says/${catPhrase}?time=${new Date()}`,
        ),
      1000,
    );
    return () => clearTimeout(timeOutId);
  }, [catPhrase]);

  return (
    <View>
      <Input
        placeholder="Введите текст"
        value={catPhrase}
        onChange={(text: string) => {
          setCatPhrase(text);
        }}
      />
      <Image source={{uri: catPhraseURL}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    resizeMode: 'stretch',
    margin: 18,
  },
});

export default Lab2;
