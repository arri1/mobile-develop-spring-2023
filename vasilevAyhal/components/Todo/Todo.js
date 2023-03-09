import React, { useState, useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Modal, View, FlatList, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import uuid from 'react-native-uuid';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'
import StylesTodo from './styles/todo'

import TodoItem from './TodoItem'

import IconPlus from '../../assets/svg/plus'
import IconClose from "../../assets/svg/close";


const Todo = () => {
    const [todoItems, setTodoItems] = useState([])
    const windowDimensions = Dimensions.get('window');
    const windowWidth = windowDimensions.width
    const screenPadding = StylesContainers.screen.padding
    const [modalVisible, setModalVisible] = useState(false)
    const inputSecond = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")

    useEffect(() => {
        // clearStorage()
        getAllTodoItems()
    }, [])

    const getAllTodoItems = async () => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map(
                    (key) => {
                        var promise = getTodoItem(key)
                        promise.then(item => {
                            setTodoItems(
                                todoItems => [
                                    { id: key, title: item.title, description: item.description, isComplete: item.isComplete },
                                    ...todoItems
                                ]
                            )
                        })
                    }
                )
            }
        } catch (e) {
            alert('ERROR: getAllTodoItems');
        }
    }

    const getTodoItem = async (key) => {
        try {
            const itemValues = await AsyncStorage.getItem(key)
            if (itemValues !== null) {
                return JSON.parse(itemValues)
            }
            return alert('ERROR: Item null');
        } catch (e) {
            return alert('ERROR: getTodoItem');
        }
    }

    const addTodoItem = async () => {
        if(inputTitle.length > 0) {
            try {
                let key = uuid.v4()
                await AsyncStorage.setItem(key, JSON.stringify({ title: inputTitle, description: inputDescription, isComplete: false }))
                setTodoItems(
                    todoItems => [
                        { id: key, title: inputTitle, description: inputDescription, isComplete: false },
                        ...todoItems
                    ]
                )
                setInputTitle('')
                setInputDescription("")
                setModalVisible(false)
            } catch (e) {
                console.log('ERROR: addTodoItem')
            }
        } else {
            alert("ERROR: Title empty!")
        }
    }
    
    const isCompleteTodoItem = async (key) => {
        try {

            setTodoItems(todoItems.map(
                (item) => {
                    if (item.id === key) {
                        AsyncStorage.mergeItem(key, JSON.stringify({isComplete: !item.isComplete}))
                        item.isComplete = !item.isComplete
                    }
                    return item
                }
            ))
        } catch (e) {
            return alert('ERROR: isCompleteTodoItem');
        }

        
    }

    const deleteTodoItem = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            let items = [...todoItems]
            items.splice(todoItems.findIndex((item) => { return item.id === key }), 1)
            setTodoItems(items)
        } catch (e) {
            return alert('ERROR: deleteTodoItem');
        }
        
    }

    return (
        <View style={{flex: 1}}>
            <FlashList
                data={todoItems}
                estimatedItemSize={70}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{padding: screenPadding}}
                renderItem={
                    ({item}) => (
                        <View style={{paddingBottom: screenPadding}}>
                            <TodoItem
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                isComplete={item.isComplete}
                                setComplete={() => isCompleteTodoItem(item.id)}
                                setDelete={() => deleteTodoItem(item.id)}
                            />
                        </View>
                    )
                }
            />

            <View style={StylesButtons.buttonFooter}>
                <TouchableOpacity
                    activeOpacity={ 0.5 }
                    style={StylesTodo.TodoAddButton}
                    onPress={() => setModalVisible(true)}
                >
                    <IconPlus size={30} color={'black'}/>
                    <Text style={StylesTexts.small}> Add </Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={true}
                statusBarTranslucent={true}
            >
                <View style={[StylesContainers.fill, StylesContainers.modalContainer]}>
                    <View style={[StylesContainers.modal, {justifyContent: 'space-between', gap: 50}]}>
                        <View style={{ gap: 20 }}>
                            <TextInput
                                inputMode="text"
                                placeholder="Title"
                                autoFocus={true}
                                blurOnSubmit={false}
                                onSubmitEditing={() => inputSecond.current.focus()}
                                returnKeyType={'next'}
                                value={inputTitle}
                                onChangeText={(v) => setInputTitle(v)}
                                style={StylesTexts.input}
                                placeholderTextColor={StylesTexts.placeholder.color}
                            />
                            <TextInput
                                ref={inputSecond}
                                blurOnSubmit={false}
                                inputMode="text"
                                placeholder="Description"
                                value={inputDescription}
                                onChangeText={(v) => setInputDescription(v)}
                                style={[StylesTexts.input, StylesTexts.inputMulti]}
                                placeholderTextColor={StylesTexts.placeholder.color}
                                multiline={true}
                                numberOfLines={5}
                            />
                        </View>

                        <View style={{ width: '100%', gap: 10 }}>

                            <TouchableOpacity
                                activeOpacity={ 0.5 }
                                style={[StylesButtons.default, { height: 35, backgroundColor: 'black' }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Cancel </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={ 0.5 }
                                style={[StylesButtons.default, { height: 35, backgroundColor: '#B2F7C1' }]}
                                onPress={() => addTodoItem()}
                            >
                                <Text style={[StylesTexts.default]}> Add </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Todo;