import React, { useState, useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Modal, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import uuid from 'react-native-uuid';

import NavigationTheme from '../style/navigation';
import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'

import Subject from './Subject'

import IconPlus from '../../assets/svg/plus'

const SubjectsScreen = ({ navigation }) => {

    const storage = 'subjects'
    const screenPadding = StylesContainers.screen.padding
    const [modalVisible, setModalVisible] = useState(false)
    const [subjects, setSubjects] = useState([])
    const [inputTitle, setInputTitle] = useState('')

    useEffect(() => {
        getAllSubjects()
    }, [])

    const getAllSubjects = async () => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map(
                    (key) => {
                        var promise = getItem(key)
                        promise.then(item => {
                            if(item.storage === storage)
                                setSubjects(
                                    subjects => [
                                        { id: key, title: item.title },
                                        ...subjects
                                    ]
                                )
                        })
                    }
                )
            }
        } catch (e) {
            alert('ERROR: getAllSubjects');
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

    const addSubject = async () => {
        if(inputTitle.length > 0) {
            try {
                const key = uuid.v4()
                await AsyncStorage.setItem(key, JSON.stringify({ title: inputTitle, storage: storage }))
                setSubjects(
                    subjects => [
                        { id: key, title: inputTitle },
                        ...subjects
                    ]
                )
                setInputTitle('')
                setModalVisible(false)
            } catch (e) {
                console.log('ERROR: addSubject')
            }
        } else {
            alert("ERROR: Title empty!")
        }
    }

    const deleteSubject = async (key) => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map(
                    (_key) => {
                        var promise = getItem(_key)
                        promise.then(async item => {
                            if(item.storage === key) await AsyncStorage.removeItem(_key)
                        })
                    }
                )
            }
            await AsyncStorage.removeItem(key)
            let items = [...subjects]
            items.splice(subjects.findIndex((item) => { return item.id === key }), 1)
            setSubjects(items)
        } catch (e) {
            return alert('ERROR: deleteSubject');
        }
        
    }

    return (
        <View style={{flex: 1}}>
            <FlashList
                data={subjects}
                estimatedItemSize={76}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{padding: screenPadding}}
                renderItem={
                    ({item}) => (
                        <TouchableOpacity
                            onPress={
                                () => { navigation.navigate('SubjectScreen', { subjectId: item.id }) }
                            }
                            activeOpacity={ 0.5 }
                            style={{paddingBottom: screenPadding}}
                        >
                            <Subject
                                title={item.title}
                                setDelete={() => deleteSubject(item.id)}
                            />
                        </TouchableOpacity>
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
                        <View>
                            <TextInput
                                inputMode="text"
                                placeholder="Title"
                                autoFocus={true}
                                returnKeyType={'done'}
                                value={inputTitle}
                                onChangeText={(v) => setInputTitle(v)}
                                onSubmitEditing={() => addSubject()}
                                style={StylesTexts.input}
                                placeholderTextColor={StylesTexts.placeholder.color}
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
                                onPress={() => addSubject()}
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

export default SubjectsScreen;