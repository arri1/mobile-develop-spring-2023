import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, Button, Alert, Text } from 'react-native';

let renderCount = 1;

const Pokemons = () => {
    useEffect(()=>{
        renderCount++;
    })
    const pokemons = [];
    for (let i = 0; i < 100; i++) {
        pokemons.push({id: renderCount+i, uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${renderCount+i}.png`})
    }
    console.log('render');
    return (
    <ScrollView>
        <Text style={styles.item}> Render count: {renderCount}</Text>
        {React.Children.toArray(
            pokemons.map((pokemon) => {
                return (
                    <View>
                        <Image style={styles.image} source={{ uri: pokemon.uri, }}/>
                        <Button onPress={() => Alert.alert(`Pokemon ${pokemon.id}`)} style={styles.item} title={'Pokemon ' + pokemon.id}/>
                    </View>
                )})
        )}
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        alignSelf: 'center',
        fontWeight: 'bold',
        padding: 20,
        fontSize: 18,
    },
    image: {
        alignSelf: 'center',
        width: 350,
        height: 300,
        resizeMode: 'contain'
    },
});

export default Pokemons;