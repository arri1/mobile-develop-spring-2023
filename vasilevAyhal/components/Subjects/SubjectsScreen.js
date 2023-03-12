import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import uuid from 'react-native-uuid';

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
    const [loading, setLoading] = useState(true)

    const [inputTitle, setInputTitle] = useState('')

    useEffect(() => {
        getAllSubjects()
        setTimeout(() => {
            setLoading(false)
        }, 500)
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
                            if(item.storage === storage) {
                                setSubjects(
                                    subjects => [
                                        ...subjects,
                                        { id: key, title: item.title },
                                    ]
                                )
                            }
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
            {
                loading ? <ActivityIndicator size="large" color="#00000050" style={{flex: 1}}/> :
                subjects.length === 0 ?
                <View style={[StylesContainers.screen, StylesContainers.default]}>
                    <Text style={[StylesTexts.default, StylesContainers.alert]}> Нет записей </Text>
                </View>
                :
                <FlashList
                    data={subjects}
                    estimatedItemSize={76}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{padding: screenPadding, paddingBottom: screenPadding*3}}
                    renderItem={
                        ({item}) => (
                            <TouchableOpacity
                                onPress={
                                    () => { navigation.navigate('SubjectScreen', { subjectId: item.id }) }
                                }
                                activeOpacity={ 0.5 }
                                style={{marginBottom: screenPadding}}
                            >
                                <Subject
                                    title={item.title}
                                    countTask={item.countTask}
                                    setDelete={() => deleteSubject(item.id)}
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
                                Create new subject
                            </Text>
                            <View>
                                <TextInput
                                    autoFocus={true}
                                    inputMode="text"
                                    placeholder="Title"
                                    returnKeyType={'done'}
                                    value={inputTitle}
                                    onChangeText={(v) => setInputTitle(v)}
                                    onSubmitEditing={() => addSubject()}
                                    style={StylesTexts.input}
                                    placeholderTextColor={StylesTexts.placeholder.color}
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
                                    onPress={() => addSubject()}
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

export default SubjectsScreen;