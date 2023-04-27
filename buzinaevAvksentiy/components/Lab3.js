import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const slowFn = n => {
  for (i = 0; i < 10000000; i++) {}
  return n*n*n;
}

const Lab3 = () => {

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const memo = useMemo(() => slowFn(number), [number]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <TextInput
          placeholder="Number"
          onChangeText={number => setNumber(parseInt(number))}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.commonNumber}> no useMemo: {~~number} </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.commonButton}
            onPress={() => {
              setNumber(slowFn);
            }}>
            <Text style={styles.commonText}> Cube </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.commonNumber}> useMemo: {~~count} </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.commonButton}
            onPress={() => {
              setCount(memo);
            }}>
            <Text style={styles.commonText}> Cube(x2) </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FF9200',
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
    fontFamily: 'font1',
    fontSize: 60,
    textAlign: 'center',
    width: '100%',
  },
  commonButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    borderRadius: 50,
    backgroundColor: '#FFC373',
    width: 120,
    height: 60,
    bottom: 35,
  },
  commonText: {
    fontFamily: 'font1',
    fontSize: 18,
    letterSpacing: 0.25,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'font1',
    fontSize: 40,
    color: '#fff',
    marginBottom: 0,
    fontWeight: 'bold',
  },
  input: {
    fontFamily: 'font1',
    fontSize: 40,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonNumber: {
    fontFamily: 'font1',
    display: 'flex',
    fontSize: 25,
    letterSpacing: 0.25,
    color: '#000',
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Lab3;