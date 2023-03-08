import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

TouchableOpacity.defaultProps = { activeOpacity: 0.6 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Lab1 = () => {
    const [pokemon, setPokemon] = useState(1000);
    const nextPokemon = () => {
        pokemon < 1008 ? setPokemon(pokemon+1) : setPokemon(1)
    }
    const backPokemon = () => {
        pokemon > 1 ? setPokemon(pokemon-1) : setPokemon(1008)
    }
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`,
        }}
        />
        <Text style={{
            fontSize: 28,
            fontWeight: 'bold'
            }}>Pokemon {pokemon}</Text>
        <AppButton
          onPress={() => backPokemon()}
          title='Back'/>
        <AppButton
          onPress={() => nextPokemon()}
          title='Next'/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 50,
    },
    image: {
        alignSelf: 'center',
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
    appButtonContainer: {
        backgroundColor: '#A3E4D7',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 10,
        margin: 5,
    },
    appButtonText: {
        fontSize: 20,
        color: '#21618C',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default Lab1;