import React, { useState, useEffect } from 'react'; 
import { Image, View, Text } from 'react-native';

const Lab2 = () => {
    const [count, setCount] = useState(3)
    const [pokemon, setPokemon] = useState(1000);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (count < 2) {
          nextPokemon();
          setCount(3);
        } else {
          setCount(count-1);
        }}, 1000);
        return () => {
          clearInterval(intervalId);
        };
      }, [count]
    );

    const nextPokemon = () => {
        pokemon < 1008 ? setPokemon(pokemon+1) : setPokemon(1);
    };

    return( 
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }}>
      <Text style={{ fontSize: 32 }}>
        Next one in: {count}
      </Text>
      <Image
      style={{
        width: 350,
        height: 350,
        resizeMode: 'contain',
      }}
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`
        }}/>
      <Text style={{
        fontSize: 28,
        fontWeight: 'bold'
        }}>Pokemon {pokemon}</Text>
    </View>
 );
}

export default Lab2;