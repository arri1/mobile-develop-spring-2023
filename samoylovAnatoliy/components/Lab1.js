import React, {useEffect, useState} from 'react';
import { Node } from 'react';
import {
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity, 
    TextInput, 
    Modal, 
    Image,
    Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

import plus from 'samoylovAnatoliy/assets/plus.png';

import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/actions';

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
            const todosValue = JSON.stringify(value)
            await AsyncStorage.setItem('todos', todosValue)            
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
        } else {
            alert('Вы ничего не ввели')
        }
    };

    const deleteItem = (key, item) => {
        setTodos((list) => {
            return list.filter(todos => todos.key != key)
        });
        handleRemoveFavorite(item)
    };

    const AddBar = ({addHandler}) => {
        const [text, setText] = useState('');
        const addText = (text) => {
            setText(text);
        };

        return (
            <View style={styles.box}>
                <TextInput onChangeText={addText} placeholder='Write here...' style={styles.input} maxLength={30}/>
                <AntDesign
                    name="checkcircleo"
                    style={{color: 'black', fontSize: 40}}
                    onPress={() => addHandler(text)}
                />
            </View>
        );
    };

    const [favWindow, setFavWindow] = useState(false)
    const [modalWindow, setModalWindow] = useState(false)

    /* --------------------------Redux---------------------------- */
    const {favorites} = useSelector(state => state.favReducer);
    const dispatch = useDispatch();

    const addToFavorites = task => dispatch(addFavorite(task));
    const removeFromFavorites = task => dispatch(removeFavorite(task));

    const handleAddFavorite = task => {
        addToFavorites(task);
    };

    const handleRemoveFavorite = task => {
        removeFromFavorites(task);
    };

    const checkFav = (task) => {
        if (favorites.filter(item => item.key === task.key).length > 0) {
            return true;
        } else {
            return false;
        }
    };
    /* -------------------------------------------------------- */

    return (
        <SafeAreaView style={[styles.container, {paddingBottom: 165}]}>
            
            <Text style={styles.title}>Count of items: {countItem}</Text>

            <View style={{alignItems: 'center', marginTop: 10, marginBottom: 15}}>
                <TouchableOpacity onPress={() => setModalWindow(true)}>
                    <Image source={plus}/>
                </TouchableOpacity>
            </View>
           
            <View style={styles.list}>
            
                <FlatList data={todos} renderItem={({item}) => (
                    <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1, marginBottom: 10}}>
                        
                        <AntDesign 
                            name={checkFav(item) ? 'star' : 'staro'} 
                            style={{color: '#FA6616', fontSize: 30}} 
                            onPress={() =>
                                checkFav(item) ? handleRemoveFavorite(item) : handleAddFavorite(item)
                            }
                        />
                        
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
        
                        <AntDesign 
                            name='delete' 
                            style={{color: '#E52B50', fontSize: 30, marginTop: 20, marginLeft: 10}} 
                            onPress={() => deleteItem(item.key, item)}
                        />
    
                    </View>
                )} showsVerticalScrollIndicator={false}/>

            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setFavWindow(true)}>
                    <Text style={styles.titleChild}>Favorites tasks</Text>
                </TouchableOpacity>
                
            </View>
            
            {/* -------------list of favorites tasks------------------ */}
            <Modal visible={favWindow} animationType='fade'>
                <View style={styles.container}>
                    {favorites.length === 0 ? (
                        <Text style={styles.title}>
                            Add a task to the list.
                        </Text>
                    ) : (
                        <FlatList data={favorites} renderItem={({item}) => (
                            <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1, marginBottom: 10}}>
                                
                                <AntDesign 
                                    name='star'
                                    style={{color: '#FA6616', fontSize: 30}} 
                                    onPress={() => handleRemoveFavorite(item)}
                                />
                                
                                <TouchableOpacity activeOpacity={0.8}>
                                    <Text style={styles.text}>{item.text}</Text>
                                </TouchableOpacity>
                
                                <AntDesign 
                                    name='delete' 
                                    style={{color: '#E52B50', fontSize: 30, marginTop: 20, marginLeft: 10}} 
                                    onPress={() => deleteItem(item.key, item)}
                                />
            
                            </View>
                        )} showsVerticalScrollIndicator={false}/>
                    )}

                    <View style={{alignItems: 'center', marginBottom: 15, marginTop: 10}}>
                        <TouchableOpacity onPress={() => setFavWindow(false)}>
                            <AntDesign 
                                name='back' 
                                style={{color: '#000000', fontSize: 45}} 
                            />
                        </TouchableOpacity>
                    </View>
                </View> 
            </Modal>
            
            {/* -------------add task modal window------------------ */}
            <Modal visible={modalWindow} animationType='slide' transparent={true} >
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: 300, height: 250, backgroundColor:'#788583', borderRadius: 10}}>

                        <View style={{flexDirection:'row-reverse', marginTop: 5, marginLeft: 5}}>
                            <AntDesign name='close' style={{color: '#E52B50', fontSize: 40}} onPress={() => setModalWindow(false)}/>
                        </View>
                
                        <Text style={styles.title}>Adding</Text>

                        <View style={{alignItems:'center'}}>
                            <AddBar addHandler={addItem}/>
                        </View>

                    </View>
                </View>
            </Modal>
                
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
        backgroundColor: '#8CA09D',
        height: 370
    },
    box: {
        alignItems: 'center',
        gap: 20,
        marginTop: 10,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: '#000000',
        marginTop: 10,
        fontFamily: 'AlumniSans-Regular',
    },
    titleChild: {
        fontSize: 24,
        color: '#484848',
        marginTop: 5,
        fontFamily: 'AlumniSans-Regular',
    },
    text: {
        padding: 13,
        textAlign: 'center',
        color: 'black',
        borderRadius: 5,
        backgroundColor: '#7A8C89',
        borderWidth: 1,
        marginTop: 10,
        fontFamily: 'AlumniSans-Regular',
        fontSize: 22,
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 2,
        borderColor: 'black',
        textAlign: 'center'
    },
});

export default Lab1;