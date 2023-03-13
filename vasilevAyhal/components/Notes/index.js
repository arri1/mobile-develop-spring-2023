import React, { useState, useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
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
    const [loading, setLoading] = useState(true)

    const inputSecond = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")
    

    useEffect(() => {
        getAllNote()
        setTimeout(() => {
            setLoading(false)
        }, 500)
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
                                        ...note,
                                        { id: key, title: item.title, description: item.description },
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
            {
                loading ? <ActivityIndicator size="large" color="#00000050" style={{flex: 1}}/> :
                note.length === 0 ?
                <View style={[StylesContainers.screen, StylesContainers.default]}>
                    <Text style={[StylesTexts.default, StylesContainers.alert]}> Нет записей </Text>
                </View>
                :
                <FlashList
                    data={note}
                    estimatedItemSize={130}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{padding: screenPadding, paddingBottom: screenPadding*3}}
                    renderItem={
                        ({item}) => (
                            <TouchableOpacity style={{marginBottom: screenPadding}}>
                                <Note
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    setDelete={() => deleteNote(item.id)}
                                />
                            </TouchableOpacity>
                        )
                    }
                />
            }

            <View style={[StylesButtons.buttonFooter, modalVisible ? {display: 'none'} : {display: 'flex'}]}>
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
                <KeyboardAvoidingView
                    behavior='padding'
                    style={StylesContainers.modalContainer}
                    enabled
                >
                    <ScrollView>
                        <View style={[StylesContainers.modal, { gap: 30 }]}>
                            <Text style={StylesTexts.big}>
                                Create new note
                            </Text>
                            <View style={{ gap: 20 }}>
                                <TextInput
                                    autoFocus={true}
                                    inputMode="text"
                                    placeholder="Title"
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

                            <View style={{ flexDirection: 'row', width: '100%', gap: 10 }}>

                                <TouchableOpacity
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, { flex: 0.5, backgroundColor: 'black' }]}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Cancel </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, { flex: 0.5, backgroundColor: '#B2F7C1' }]}
                                    onPress={() => addNote()}
                                >
                                    <Text style={[StylesTexts.default]}> Add </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    );
};

export default Notes;