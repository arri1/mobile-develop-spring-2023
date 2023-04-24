import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Lab1 = () => {
  const [number, setNumber] = useState(0);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <TextInput
          placeholder="Число"
          onChangeText={number => setNumber(parseInt(number))}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.commonNumber}>
          Результат: {Math.round(number * 100) / 100}
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.commonButton}
            onPress={() => {
              setNumber(number * number);
            }}>
            <Text style={styles.commonText}> квадрат </Text>
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
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  number: {
    fontSize: 60,
    textAlign: 'center',
    width: '100%',
  },
  commonButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -50,
    marginLeft: 140,
    borderRadius: 4,
    backgroundColor: '#216bff',
    width: 120,
    height: 60,
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
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Lab1;
