import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

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
      <TextInput
        editable
        value={catPhrase}
        onChangeText={(text: string) => {
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
    padding: 5,
  },
});

export default Lab2;
