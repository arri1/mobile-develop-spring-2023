import React, { useState, useRef, useEffect } from "react";
import { ActivityIndicator, Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from "@shopify/flash-list";
import uuid from 'react-native-uuid';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesButtons from '../style/buttons'

import Task from "./Task";

import IconPlus from '../../assets/svg/plus'

const Tasks = (props) => {
    const storage = props.subjectId
    const screenPadding = StylesContainers.screen.padding
    const [modalVisible, setModalVisible] = useState(false)
    const [subjectTask, setSubjectTask] = useState([])
    const [loading, setLoading] = useState(true)

    const inputSecond = useRef(null)
    const inputThird = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")
    const [inputGrade, setInputGrade] = useState("")


    useEffect(
        () => {
            getAllSubjectTask()
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }, []
    )

    const getAllSubjectTask = async () => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map((key) => {
                    var promise = getItem(key)
                    promise.then(item => {
                        if(item.storage === storage)
                            setSubjectTask( subjectTask => [
                                ...subjectTask,
                                { id: key, title: item.title, description: item.description, grade: item.grade, isComplete: item.isComplete },
                            ])
                    })
                })
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
                    { title: inputTitle, description: inputDescription, grade: inputGrade, isComplete: false, storage: storage }
                ))
                setSubjectTask(
                    subjectTask => [
                        { id: key, title: inputTitle, description: inputDescription, grade: inputGrade, isComplete: false },
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

    const setIsComplete = async (key) => {
        try {
            setSubjectTask(subjectTask.map(
                (item) => {
                    if (item.id === key) {
                        AsyncStorage.mergeItem(key, JSON.stringify({isComplete: !item.isComplete}))
                        item.isComplete = !item.isComplete
                    }
                    return item
                }
            ))
        } catch (e) {
            return alert('ERROR: isComplete');
        }
    }

    return (
        <View style={{flex: 1}}>
            {
                loading ? <ActivityIndicator size="large" color="#00000050" style={{flex: 1}}/> :
                subjectTask.length === 0 ?
                <View style={[StylesContainers.screen, StylesContainers.default]}>
                    <Text style={[StylesTexts.default, StylesContainers.alert]}> Нет записей </Text>
                </View>
                :
                <FlashList
                    data={subjectTask}
                    estimatedItemSize={156}
                    progressViewOffset={100}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{padding: screenPadding, paddingBottom: screenPadding*3}}
                    renderItem={
                        ({item}) => (
                            <View style={{marginBottom: screenPadding}}>
                                <Task
                                    title={item.title}
                                    description={item.description}
                                    grade={item.grade}
                                    isComplete={item.isComplete}
                                    setDelete={() => deleteSubjectTask(item.id)}
                                    setComplete={() => setIsComplete(item.id)}
                                />
                            </View>
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
                                Create new task
                            </Text>
                            <View style={{ gap: 20 }}>
                                <TextInput
                                    autoFocus={true}
                                    blurOnSubmit={false}
                                    inputMode="text"
                                    placeholder="Title"
                                    returnKeyType='next'
                                    value={inputTitle}
                                    onChangeText={(v) => setInputTitle(v)}
                                    onSubmitEditing={() => inputSecond.current.focus()}
                                    style={StylesTexts.input}
                                    placeholderTextColor={StylesTexts.placeholder.color}
                                    maxLength={100}
                                />
                                <TextInput
                                    ref={inputSecond}
                                    blurOnSubmit={false}
                                    inputMode="numeric"
                                    placeholder="Grade"
                                    returnKeyType='next'
                                    value={inputGrade}
                                    onChangeText={(v) => setInputGrade(v)}
                                    onSubmitEditing={() => inputThird.current.focus()}
                                    style={StylesTexts.input}
                                    placeholderTextColor={StylesTexts.placeholder.color}
                                    numberOfLines={1}
                                    maxLength={100}
                                />
                                <TextInput
                                    ref={inputThird}
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
                                    onPress={() => addSubjectTask()}
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

export default Tasks;