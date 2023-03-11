import React, { useState, useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Modal, View, FlatList, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import uuid from 'react-native-uuid';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'

import Note from './Note'

import IconPlus from '../../assets/svg/plus'


const Notes = () => {
    const storage = 'notes'
    const screenPadding = StylesContainers.screen.padding
    const [modalVisible, setModalVisible] = useState(false)
    const [note, setNote] = useState([])

    const inputSecond = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")

    useEffect(() => {
        getAllNote()
    }, [])

    const getAllNote = async () => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map(
                    (key) => {
                        var promise = getItem(key)
                        promise.then(item => {
                            if(item.storage === storage)
                                setNote(
                                    note => [
                                        { id: key, title: item.title, description: item.description },
                                        ...note
                                    ]
                                )
                        })
                    }
                )
            }
        } catch (e) {
            alert('ERROR: getAllNote');
        }
    }

    const getItem = async (key) => {
        try {
            const itemValues = await AsyncStorage.getItem(key)
            if (itemValues !== null) {
                return JSON.parse(itemValues)
            }
            return alert('ERROR: Item null');
        } catch (e) {
            return alert('ERROR: getItem');
        }
    }

    const addNote = async () => {
        if(inputTitle.length > 0) {
            try {
                let key = uuid.v4()
                await AsyncStorage.setItem(key, JSON.stringify({ title: inputTitle, description: inputDescription, storage: storage }))
                setNote(
                    note => [
                        { id: key, title: inputTitle, description: inputDescription },
                        ...note
                    ]
                )
                setInputTitle('')
                setInputDescription("")
                setModalVisible(false)
            } catch (e) {
                console.log('ERROR: addNote')
            }
        } else {
            alert("ERROR: Title empty!")
        }
    }
    
    // const isCompleteNoteItem = async (key) => {
    //     try {

    //         setNote(note.map(
    //             (item) => {
    //                 if (item.id === key) {
    //                     AsyncStorage.mergeItem(key, JSON.stringify({isComplete: !item.isComplete}))
    //                     item.isComplete = !item.isComplete
    //                 }
    //                 return item
    //             }
    //         ))
    //     } catch (e) {
    //         return alert('ERROR: isCompleteNoteItem');
    //     }
    // }

    const deleteNote = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            let items = [...note]
            items.splice(note.findIndex((item) => { return item.id === key }), 1)
            setNote(items)
        } catch (e) {
            return alert('ERROR: deleteNote');
        }
    }

    return (
        <View style={{flex: 1}}>
            <FlashList
                data={note}
                estimatedItemSize={130}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{padding: screenPadding}}
                renderItem={
                    ({item}) => (
                        <View style={{paddingBottom: screenPadding}}>
                            <Note
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                setDelete={() => deleteNote(item.id)}
                            />
                        </View>
                    )
                }
            />

            <View style={StylesButtons.buttonFooter}>
                <TouchableOpacity
                    activeOpacity={ 0.5 }
                    style={StylesButtons.addButton}
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
                                maxLength={100}
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
                                onPress={() => addNote()}
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

export default Notes;