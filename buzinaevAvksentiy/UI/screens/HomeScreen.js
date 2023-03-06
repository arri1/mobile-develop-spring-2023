import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button  
} from 'react-native';
import { COLORS } from '../../assets/Styles'
import { useState } from 'react';


export const HomeScreen = () => {
  const [name, setName] = useState('Senya');
  const [person, setPerson] = useState({name: 'Senya', age: 22});

  const clickHandler = () => {
    setName('Avksentiy');
    setPerson({name: 'Avksentiy', age: 23})
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text> My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title = 'update state' onPress={clickHandler}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: COLORS.mint,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

