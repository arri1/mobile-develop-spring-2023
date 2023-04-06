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

            <View style={styles.container}>
                <Text style={(color) ? styles.green : styles.red}>{text}</Text>
  
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        
                        <TextInput onChangeText={setText1} placeholder='Write here...' style={styles.input}/>
                        <Button title='Ok' onPress={() => setText(text1)}/>

                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'silver',
        marginTop: '50%',
    },
    green: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        borderRadius: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        margin: 20,
    },
    red: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        borderRadius: 30,
        backgroundColor: 'red',
        borderWidth: 1,
        margin: 20,
    },
    button: {
        margin: 10
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: 'black',
    },
});

export default Lab2;