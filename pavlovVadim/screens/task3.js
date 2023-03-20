import React, {useState, useEffect, useMemo, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Style,
  TextInput,
  Image,
} from 'react-native';
import axios from 'axios';
import {interpolate, set} from 'react-native-reanimated';

const sum = n => {
  let s = 1;
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 1000; j++) {
      s = Math.sin(s);
    }
  }
  return -20;
};
const first_number = 1;
const second_number = 2;
const task3 = () => {
  const result2 = useMemo(() => sum(second_number), [second_number]);
  const [first, setFirst] = useState(350);
  const [second, setSecond] = useState(248);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        style={{top:first, left: -120, width: 58, height: 102}}
        source={require('../assets/yellow_car.png')}
      />
      <Image
        style={{top:second, left:120, width: 58, height: 102}}
        source={require('../assets/red_car.png')}
      />
      <TouchableOpacity
        style={{
          marginTop: 10,
          borderRadius: 10,
          width: 120,
          height: 40,
          backgroundColor: '#2C98F0',
        }}>
        <Text
          onPress={() => {
            setFirst(first + sum(first_number));
          }}
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '800',
            textAlign: 'center',
          }}>
          Вперед
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 10,
          borderRadius: 10,
          width: 120,
          height: 40,
          backgroundColor: '#2C98F0',
        }}>
        <Text
          onPress={() => {
            setSecond(second + result2);
          }}
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '800',
            textAlign: 'center',
          }}>
          Вперед
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default task3;
