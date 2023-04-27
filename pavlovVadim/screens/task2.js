import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Style,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../style.js';
const colors = ['red', '#2C98F0'];

const task2 = () => {
  const [word, setWord] = useState('Напишите число');
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const guess = useSelector(state => state.word.word);
  useEffect(() => {
    if (word == guess) {
      setBackgroundColorIndex((count = 1));
    }
    if (word != guess) {
      setBackgroundColorIndex((count = 0));
    }
  }, [word]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 150,
        //backgroundColor: colors[backgroundColorIndex],
      }}>
      <Text style={[styles.defaultText, styles.headerText1]}>Task 2</Text>

      <View
        style={{
          flex: 1,
          paddingBottom: 20,
          marginTop: 40,
          alignItems: 'center',
        }}>
        <Text style={[styles.defaultText, styles.headerText2]}>{guess}</Text>
        <TextInput
          style={{
            color: 'black',
            marginTop: 20,
            fontSize: 20,
            width: 200,
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontSize: 18,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 20,
            borderColor: colors[backgroundColorIndex],
          }}
          textAlign="center"
          editable
          value={word}
          onChangeText={text => {
            setWord(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default task2;
