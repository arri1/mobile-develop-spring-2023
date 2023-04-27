import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Lab2 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number < 0) alert('Число должно быть больше нуля!');
  },[number]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <TextInput
          placeholder="Number"
          onChangeText={number => setNumber(parseInt(~~number))}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.commonNumber}>
          Result: {Math.round(number * 100) / 100}
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.commonButton}
            onPress={() => {
              setNumber(Math.sqrt(number));
            }}>
            <Text style={styles.commonText}> Root </Text>
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
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    marginVertical: -50,
    marginLeft: 140,
    borderRadius: 50,
    backgroundColor: '#FFC373',
    width: 120,
    height: 60,
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
    display: 'flex',
    fontSize: 40,
    fontFamily: 'font1',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Lab2;
