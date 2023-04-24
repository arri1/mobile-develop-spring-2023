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
import styles from '../style.js';
import axios from 'axios';
import {interpolate, set} from 'react-native-reanimated';
import style from '../style.js';

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
  const [first, setFirst] = useState(400);
  const [second, setSecond] = useState(400);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{position: 'absolute', marginRight: '50%', top: 150}}>
        <Text style={[styles.defaultText, styles.headerText1]}>Task 3</Text>
      </View>

      <Image
        style={{
          position: 'absolute',
          top: first,
          left: 50,
          width: 58,
          height: 102,
        }}
        source={require('../assets/yellow_car.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: second,
          right: 50,
          width: 58,
          height: 102,
        }}
        source={require('../assets/red_car.png')}
      />
      <View style={{position: 'absolute', left: 35, top: 520}}>
        <TouchableOpacity style={[styles.defaultButton, styles.borderButton]}>
          <Text
            onPress={() => {
              setFirst(first + sum(first_number));
            }}
            style={styles.defaultText}>
            Вперёд
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', right: 35, top: 520}}>
        <TouchableOpacity style={[styles.defaultButton, styles.borderButton]}>
          <Text
            onPress={() => {
              setSecond(second + result2);
            }}
            style={[styles.defaultText]}>
            Вперёд
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default task3;


