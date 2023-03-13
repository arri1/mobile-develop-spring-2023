import React, {useState, useEffect, useMemo, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Style,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {set} from 'react-native-reanimated';

function factirual(n) {
  if (n < 0) {
    console.error('Попробуйте с числом больше нуля');
  } else if (n === 0) {
    return 1;
  } else {
    return Math.sin(Math.sin(n)) * factirual(n - 1);
  }
}

const task3 = () => {
  const [fact, setFact] = useState(0);
  const [result, setResult] = useState(0);
  const memoResult = useMemo(() => setResult(), [fact]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TextInput
        style={{
          color: 'black',
          fontSize: 30,
          textAlign: 'center',
          backgroundColor: '#555555',
        }}
        multiline
        textAlign="center"
        editable
        value={fact}
        onChangeText={text => {
          setFact(text);
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 10,
          borderRadius: 10,
          height: 40,
          width: 220,
          backgroundColor: '#2C98F0',
        }}
        onPress={() => {
          setResult(factirual(fact));
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '800',
            textAlign: 'center',
          }}>
          Найти факториал
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: '800',
          textAlign: 'center',
        }}>
        Ответ:
        {result}
      </Text>
    </SafeAreaView>
  );
};
export default task3;
