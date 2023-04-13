import React, {useState, useEffect} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        <SafeAreaView style={styles.mainWindow}>

            <View style={styles.container}>
                <Text style={(color) ? styles.green : styles.red}>{text}</Text>
  
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', marginBottom: 20}}>
                        
                        <TextInput onChangeText={setText1} placeholder='Write here...' style={styles.input}/>
                        <AntDesign
                            name="checkcircleo"
                            style={{color: 'black', fontSize: 40}}
                            onPress={() => setText(text1)}
                        />
                        
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    mainWindow: {
        backgroundColor: '#AFC9C5',
        flex: 1
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#88A19A',
        marginTop: '50%',
        
    },
    green: {
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        color: 'black',
        borderRadius: 30,
        backgroundColor: '#0BDA51',
        borderWidth: 1,
        margin: 20,
        fontFamily: 'AlumniSans-Regular',
    },
    red: {
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        color: 'black',
        borderRadius: 30,
        backgroundColor: '#E52B50',
        borderWidth: 1,
        margin: 20,
        fontFamily: 'AlumniSans-Regular',
    },
    button: {
        margin: 10
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 2,
        borderColor: 'black',
        marginRight: 15,
        fontFamily: 'AlumniSans-Regular',
        textAlign: 'center'
    },
});

export default Lab2;