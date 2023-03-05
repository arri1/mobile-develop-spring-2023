import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Style,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const colors = ["red", "green"];
const task2 = () => {
  const [word, setWord] = useState('');
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const guess = "GASL";
  
  useEffect(() => {
    if (word == guess){
        setBackgroundColorIndex(count = 1);
    }
    if (word != guess){
        setBackgroundColorIndex(count = 0);
    }
  },[word]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors[backgroundColorIndex]
      }}>
      <View style={{flex: 1, paddingBottom: 20, alignItems: 'center'}}>
        <Text style={{color: 'black',backgroundColor: colors[backgroundColorIndex], fontSize: 30, textAlign: 'center'}}>
          {guess}
        </Text>
        <TextInput
          style={{
            color: 'BLUE',
            fontSize: 30,
            textAlign: 'center',
            backgroundColor: colors[backgroundColorIndex],
          }}
          multiline
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
