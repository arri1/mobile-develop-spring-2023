import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

function slowFn(n) {
  for (i = 0; i < 10000000; i++) {}
  return n*n*n;
}

const Lab3 = () => {

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const double = useMemo(() => slowFn(number), [number]);
  //const double = slowFn(number);
  
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <TextInput
          placeholder="Число"
          onChangeText={count => setCount(parseInt(count))}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.commonNumber}> useMemo: {~~count} </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.commonButton}
            onPress={() => {
              setCount(count*count*count);
            }}>
            <Text style={styles.commonText}> куб </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Число"
          onChangeText={number => setNumber(parseInt(number))}
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.commonNumber}> no useMemo: {~~number} </Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.commonButton}
            onPress={() => {
              setNumber(slowFn(number));
            }}>
            <Text style={styles.commonText}> куб </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#c7fff8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 60,
    textAlign: 'center',
    width: '100%',
  },
  commonButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    borderRadius: 50,
    backgroundColor: '#216bff',
    width: 120,
    height: 60,
    bottom: 35,
  },
  commonText: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 0,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 40,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonNumber: {
    display: 'flex',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Lab3;