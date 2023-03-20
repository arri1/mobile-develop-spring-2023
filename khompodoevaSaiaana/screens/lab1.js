import { StyleSheet, Text, Image, View } from 'react-native';
import React, { useState } from 'react';
import AppButton from '../components/appButton';

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
});

export default Lab1;