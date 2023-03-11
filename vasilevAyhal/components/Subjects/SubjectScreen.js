import React, { useState, useRef, useEffect } from "react";
import { Alert, Modal, View, FlatList, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { FlashList } from "@shopify/flash-list";
import uuid from 'react-native-uuid';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesButtons from '../style/buttons'

import Task from "./Task";

import IconPlus from '../../assets/svg/plus'

const SubjectScreen = ({ route, navigation }) => {
    const storage = route.params.subjectId
    const screenPadding = StylesContainers.screen.padding
    const [modalVisible, setModalVisible] = useState(false)

    const inputSecond = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")
    const [inputGrade, setInputGrade] = useState("")

    const [subjectTask, setSubjectTask] = useState([])

    useEffect(
        () => {
            var promise = getItem(route.params.subjectId)
            promise.then(item => {
                navigation.setOptions({ headerTitle: item.title })
            })
            getAllSubjectTask()
        }, []
    )

    const getAllSubjectTask = async () => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map(
                    (key) => {
                        var promise = getItem(key)
                        promise.then(item => {
                            if(item.storage === storage)
                                setSubjectTask(
                                    subjectTask => [
                                        { id: key, title: item.title, description: item.description, grade: item.grade },
                                        ...subjectTask
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

    const addSubjectTask = async () => {
        if(inputTitle.length > 0) {
            try {
                let key = uuid.v4()
                await AsyncStorage.setItem(key, JSON.stringify(
                    { title: inputTitle, description: inputDescription, grade: inputGrade, storage: storage }
                ))
                setSubjectTask(
                    subjectTask => [
                        { id: key, title: inputTitle, description: inputDescription, grade: inputGrade },
                        ...subjectTask
                    ]
                )
                setInputTitle('')
                setInputDescription("")
                setInputGrade("")
                setModalVisible(false)
            } catch (e) {
                console.log('ERROR: addSubjectTask')
            }
        } else {
            alert("ERROR: Title empty!")
        }
    }

    const deleteSubjectTask = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            let items = [...subjectTask]
            items.splice(subjectTask.findIndex((item) => { return item.id === key }), 1)
            setSubjectTask(items)
        } catch (e) {
            return alert('ERROR: deleteSubjectTask');
        }
        
    }

    return (
        <View style={{flex: 1}}>
            <FlashList
                data={subjectTask}
                estimatedItemSize={130}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{padding: screenPadding}}
                renderItem={
                    ({item}) => (
                        <View style={{paddingBottom: screenPadding}}>
                            <Task
                                title={item.title}
                                description={item.description}
                                grade={item.grade}
                                setDelete={() => deleteSubjectTask(item.id)}
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
                            <TextInput
                                blurOnSubmit={false}
                                inputMode="numeric"
                                placeholder="Grade"
                                returnKeyType={'done'}
                                onSubmitEditing={() => addSubjectTask()}
                                value={inputGrade}
                                onChangeText={(v) => setInputGrade(v)}
                                style={StylesTexts.input}
                                placeholderTextColor={StylesTexts.placeholder.color}
                                numberOfLines={1}
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
                                onPress={() => addSubjectTask()}
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

export default SubjectScreen;