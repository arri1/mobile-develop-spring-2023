import React, {useEffect, useState} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableOpacity, TextInput, Modal, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

import plus from 'samoylovAnatoliy/assets/plus.png';

const Lab1 = () => {

    const [todos, setTodos] = useState(['123'])

    const [countItem, setCountItem] = useState(todos.length)

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        setData([todos])
        setCountItem(todos.length)
    }, [todos]);
    
    const setData = async ([value]) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('todos', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('todos')
          setTodos(JSON.parse(value))
        } catch(e) {
          console.log(e)
        }
      }

    const addItem = (text) => {

        if (text) {
            setTodos((list) => {
                return [
                    {text: text, key: Math.random().toString(36).substring(7)},
                    ...list
                ]
            });
            alert('Задача добавлена')
        } else {
            alert('Вы ничего не ввели')
        }

        console.log(todos.length)
        
    };

    const deleteItem = (key) => {
        setTodos((list) => {
            return list.filter(todos => todos.key != key)
        });
        alert('Удалено')
    };

    const AddBar = ({addHandler}) => {
        
        const [text, setText] = useState('');

        const addText = (text) => {
            setText(text);
        };

        return (
            <View style={styles.box}>
                <TextInput onChangeText={addText} placeholder='Впишите задачу...' style={styles.input}/>
                <Button title='Ок' onPress={() => addHandler(text)}/>
            </View>
        );
    };

    const [modalWindow, setModalWindow] = useState(false)

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <View style={styles.list}>
                
                    <Text style={styles.title}>Count of items: {countItem}</Text>

                    <TouchableOpacity onPress={() => setModalWindow(true)}>
                        <Image source={plus} style={styles.image}/>
                    </TouchableOpacity>

                    <FlatList data={todos} renderItem={({item}) => (
                        <TouchableOpacity onPress={() => deleteItem(item.key)}>
                            <Text style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
                    )}/>



                    <Modal visible={modalWindow} animationType='slide' transparent={true} >
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: 300, height: 250, backgroundColor:'white'}}>

                                <View style={{flexDirection:'row-reverse', marginTop: 5, marginLeft: 5}}>
                                    <AntDesign name='close' style={{color: 'red', fontSize: 40}} onPress={() => setModalWindow(false)}/>
                                </View>
                        
                                <Text style={styles.title}>Добавление</Text>

                                <View style={{alignItems:'center'}}>
                                    <AddBar addHandler={addItem}/>
                                </View>

                            </View>
                        </View>
                    </Modal>
                    
                </View> 
            </View>

            
        </SafeAreaView>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFC9C5',
    },
    list: {
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: 'black',
        marginTop: 20,
        fontFamily: 'AlumniSans-Regular',
    },
    text: {
        padding: 13,
        textAlign: 'center',
        color: 'black',
        borderRadius: 5,
        backgroundColor: '#7A8C89',
        borderWidth: 1,
        marginTop: 20,
        fontFamily: 'AlumniSans-Regular',
        fontSize: 22,
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    image: {
        marginTop: 15,
    },
});

export default Lab1;