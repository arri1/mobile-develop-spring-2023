import React, {useState, useEffect} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lab2 = () => {

    const [text, setText] = useState('')
    const [text1, setText1] = useState('')
    const [color, setColor] = useState('')
    
    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        setData(text)
        if (text == 'green') {
            setColor('green')
        } else {
            setColor('')
        }
    }, [text]);

    const setData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('text', jsonValue)
        } catch (e) {
          console.log(e)
        }
    }

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('text')
          setText(JSON.parse(value))
        } catch(e) {
          console.log(e)
        }
    }

    return (
        <SafeAreaView>

            <View>
                <Text style={(color) ? styles.green : styles.red}>{text}</Text>
                
                <TextInput onChangeText={setText1} placeholder='Напишите...' style={styles.input}/>
                <Button title='Сохранить' onPress={() => setText(text1)}/>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

    green: {
        padding: 13,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        borderRadius: 5,
        backgroundColor: 'green',
        borderWidth: 1,
        marginTop: 20,
    },
    red: {
        padding: 13,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        borderRadius: 5,
        backgroundColor: 'red',
        borderWidth: 1,
        marginTop: 20,
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: 'black',
    },
});

export default Lab2;