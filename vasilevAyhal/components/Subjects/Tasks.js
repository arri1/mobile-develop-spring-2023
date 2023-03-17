import React, { useState, useRef, useEffect } from "react";
import * as SQLite from 'expo-sqlite'
import { Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, RefreshControl } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesButtons from '../style/buttons'

import Task from "./Task";
import ModalEdit from './ModalEdit'

import IconPlus from '../../assets/svg/plus'

const Tasks = (props) => {
    const table = 'subject'
    const db = SQLite.openDatabase(`${table}.db`)
    const subject_id = props.subjectId
    const screenPadding = StylesContainers.screen.padding
    const [subjectTask, setSubjectTask] = useState([])
    const [loading, setLoading] = useState(true)

    const [modalMore, setModalMore] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    
    const [itemId, setItemId] = useState('')
    const [itemTitle, setItemTitle] = useState('')
    const [itemGrade, setItemGrade] = useState('')
    const [itemDescription, setItemDescription] = useState("")

    const inputSecond = useRef(null)
    const inputThird = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")
    const [inputGrade, setInputGrade] = useState("")

    const refresh = React.useCallback(() => {
        getAllSubjectTask()
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);

    useEffect(
        () => {
            db.transaction(tx => 
                tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table}
                    (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        subject_id INTEGER REFERENCES subjects(id),
                        title TEXT,
                        grade INTEGER,
                        description TEXT,
                        isComplete INTEGER
                    )`
                )
            );
            refresh()
        }, []
    )
    
    const getAllSubjectTask = () => {
        setSubjectTask([])
        db.transaction(tx =>
            tx.executeSql(`SELECT * FROM ${table} WHERE subject_id = ? ORDER BY id DESC`, [subject_id],
                (_, res) => {
                    var rows = []
                    for (let i = 0; i < res.rows.length; i++) {
                        rows.push(res.rows.item(i))
                    }
                    setSubjectTask(rows)
                },
                (_, error) => console.log(error)
            )
        )
    }

    const addSubjectTask = () => {
        if(inputTitle.length > 0) {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${table} (subject_id, title, grade, description, isComplete) VALUES (?, ?, ?, ?, ?)`, [subject_id, inputTitle, inputGrade, inputDescription, 0],
                    (_, res) => {
                        setSubjectTask(
                            item => [
                                {id: res.insertId, title: inputTitle, grade: inputGrade, description: inputDescription, isComplete: 0},
                                ...item
                            ]
                        )
                    },
                    (_, error) => console.log(error)
                );
            });
            setInputTitle('')
            setInputGrade('')
            setInputDescription('')
            setModalAdd(false)
        } else {
            alert("Заголовок пустой!")
        }
    }

    const deleteSubjectTask = (id) => {
        db.transaction(tx =>
            tx.executeSql(`DELETE FROM ${table} WHERE id = ? AND subject_id = ?`, [id, subject_id],
                (_, res) => {
                    if (res.rowsAffected > 0) {
                        let items = [...subjectTask]
                        items.splice(subjectTask.findIndex((item) => { return item.id === id }), 1)
                        setSubjectTask(items)
                    }
                },
                (_, error) => console.log(error)
            )
        )
    }
    
    const saveInputs = (title, grade, description) => {
        db.transaction(tx =>
            tx.executeSql(
                `UPDATE ${table} SET title = ?, grade = ?, description = ? WHERE id = ? AND subject_id = ?`, [title, grade, description, itemId, subject_id],
                (_, res) => {
                    if (res.rowsAffected > 0) {
                        var rows = [...subjectTask];
                        const indexToUpdate = rows.findIndex(item => item.id === itemId);
                        rows[indexToUpdate].title = title;
                        rows[indexToUpdate].grade = grade;
                        rows[indexToUpdate].description = description;
                        setSubjectTask(rows);
                    }
                },
                (_, error) => console.log(error)
            )
        )
    }

    const setIsComplete = (id, value) => {
        db.transaction(tx =>
            tx.executeSql(
                `UPDATE ${table} SET isComplete = ? WHERE id = ? AND subject_id = ?`, [value, id, subject_id],
                (_, res) => {
                    if (res.rowsAffected > 0) {
                        var rows = [...subjectTask];
                        const indexToUpdate = rows.findIndex(item => item.id === id);
                        rows[indexToUpdate].isComplete = value;
                        setSubjectTask(rows);
                    }
                },
                (_, error) => console.log(error)
            )
        )
    }

    return (
        <View style={{flex: 1}}>
            {
                !subjectTask ? null : subjectTask.length === 0 ?
                <View style={[StylesContainers.screen, StylesContainers.default]}>
                    <Text style={[StylesTexts.default, StylesContainers.alert]}> Нет записей </Text>
                </View>
                :
                <FlashList
                    data={subjectTask}
                    estimatedItemSize={130}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{padding: screenPadding, paddingBottom: screenPadding*3}}
                    refreshControl={ <RefreshControl refreshing={loading} onRefresh={refresh}/> }
                    renderItem={
                        ({item}) => (
                            <TouchableOpacity activeOpacity={1}
                                onLongPress={
                                    () => {
                                        setItemId(item.id)
                                        setItemTitle(item.title)
                                        setItemGrade(item.grade)
                                        setItemDescription(item.description)
                                        setModalMore(true)
                                    }
                                }
                                onPress={
                                    () => {
                                        setItemId(item.id)
                                        setItemTitle(item.title)
                                        setItemGrade(item.grade)
                                        setItemDescription(item.description)
                                        setModalEdit(true);
                                    }
                                }
                                style={{marginBottom: screenPadding}}
                            >
                                <Task
                                    title={item.title}
                                    grade={item.grade}
                                    description={item.description}
                                    isComplete={item.isComplete}
                                    setDelete={() => deleteSubjectTask(item.id)}
                                    setComplete={() => setIsComplete(item.id, item.isComplete ? 0 : 1)}
                                />
                            </TouchableOpacity>
                        )
                    }
                />
            }

            {/* Modal More */}
            <Modal
                visible={modalMore}
                animationType='fade'
                transparent={true}
                statusBarTranslucent={true}
            >
                <View style={[{flex: 1, justifyContent: 'center'}, StylesContainers.modalBackground]}>
                    <View style={[StylesContainers.modal, { gap: 20 }]}>
                        <TouchableOpacity activeOpacity={ 0.5 }
                            onPress={() => { deleteSubjectTask(itemId); setModalMore(false); }}
                            style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.delete]}
                            >
                            <Text style={StylesTexts.default}> Удалить </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={ 0.5 }
                            onPress={() => { setModalEdit(true); setModalMore(false); }}
                            style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.edit]}
                        > 
                            <Text style={StylesTexts.default}> Изменить </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={ 0.5 }
                            onPress={() => setModalMore(false)}
                            style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.cancel]}
                        >
                            <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Закрыть </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

            {/* Modal Edit */}
            {
                !modalEdit ? null :
                <ModalEdit show={() => setModalEdit(false)}
                    title={itemTitle}
                    grade={itemGrade}
                    description={itemDescription}
                    gradeShow={true} descriptionShow={true}
                    saveInputs={(t, g, d) => saveInputs(t, g, d)}
                />
            }

            {/* Modal Add */}
            <Modal
                visible={modalAdd}
                animationType='slide'
                transparent={true}
                statusBarTranslucent={true}
            >
                <KeyboardAvoidingView
                    behavior='padding'
                    style={[StylesContainers.modalContainer, StylesContainers.modalBackground]}
                    enabled
                >
                    <ScrollView>
                        <View style={[StylesContainers.modal, { gap: 30 }]}>
                            <Text style={StylesTexts.big}>
                                Создание нового задания
                            </Text>
                            <View style={{ gap: 20 }}>
                                <TextInput
                                    autoFocus={true}
                                    blurOnSubmit={false}
                                    inputMode="text"
                                    placeholder="Заголовок"
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
                                    placeholder="Балл"
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
                                    placeholder="Описание"
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
                                    style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.cancel, { flex: 0.5 }]}
                                    onPress={() => setModalAdd(false)}
                                >
                                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Закрыть </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.accept, { flex: 0.5 }]}
                                    onPress={() => addSubjectTask()}
                                >
                                    <Text style={[StylesTexts.default]}> Создать </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal>

            {/* Button Add */}
            <View style={[StylesButtons.buttonFooter, modalAdd ? {display: 'none'} : {display: 'flex'}]}>
                <TouchableOpacity
                    activeOpacity={ 0.5 }
                    style={StylesButtons.addButton}
                    onPress={() => setModalAdd(true)}
                >
                    <IconPlus size={30} color={'black'}/>
                    <Text style={StylesTexts.small}> Создать новое задание </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={ 0.5 }
                    style={StylesButtons.addButton}
                    onPress={() => refresh()}
                >
                    <IconPlus size={30} color={'black'}/>
                    <Text style={StylesTexts.small}> ref </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Tasks;