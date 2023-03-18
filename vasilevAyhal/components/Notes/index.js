import React, { useState, useRef, useEffect } from "react";
import * as SQLite from 'expo-sqlite'
import { Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, RefreshControl } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'

import Note from './Note'
import ModalEdit from './ModalEdit'

import IconPlus from '../../assets/svg/plus'

const Notes = () => {
    const table = 'notes'
    const db = SQLite.openDatabase(`${table}.db`)
    const screenPadding = StylesContainers.screen.padding
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    
    const [modalMore, setModalMore] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    
    const [itemId, setItemId] = useState('')
    const [itemTitle, setItemTitle] = useState('')
    const [itemDescription, setItemDescription] = useState("")

    const inputSecond = useRef(null)
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")

    const refresh = React.useCallback(() => {
        getAllNote()
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, []);

    useEffect(() => {
        db.transaction(tx => 
            tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table}
                (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    description TEXT
                )`
            )
        )
        refresh()
    }, [])

    const getAllNote = () => {
        setNotes([])
        db.transaction(tx =>
            tx.executeSql(`SELECT * FROM ${table} ORDER BY id DESC`, [],
                (_, res) => {
                    var rows = []
                    for (let i = 0; i < res.rows.length; i++) {
                        rows.push(res.rows.item(i))
                    }
                    setNotes(rows)
                },
                (_, error) => console.log(error)
            )
        )
    }

    const addNote = () => {
        if(inputTitle.length > 0) {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${table} (title, description) VALUES (?, ?)`, [inputTitle, inputDescription],
                    (_, res) => {
                        setNotes(
                            item => [
                                {id: res.insertId, title: inputTitle, description: inputDescription},
                                ...item
                            ]
                        )
                    },
                    (_, error) => console.log(error)
                );
            });
            setInputTitle('')
            setInputDescription('')
            setModalAdd(false)
        } else {
            alert("Заголовок пустой!")
        }
    }

    const deleteNote = (id) => {
        db.transaction(tx =>
            tx.executeSql(`DELETE FROM ${table} WHERE id = ?`, [id],
                (_, res) => {
                    if (res.rowsAffected > 0) {
                        let items = [...notes]
                        items.splice(notes.findIndex((item) => { return item.id === id }), 1)
                        setNotes(items)
                    }
                },
                (_, error) => console.log(error)
            )
        )
    }
    
    const saveInputs = (title, description) => {
        db.transaction(tx =>
            tx.executeSql(
                `UPDATE ${table} SET title = ?, description = ? WHERE id = ?`, [title, description, itemId],
                (_, res) => {
                    if (res.rowsAffected > 0) {
                        var rows = [...notes];
                        const indexToUpdate = rows.findIndex(item => item.id === itemId);
                        rows[indexToUpdate].title = title;
                        rows[indexToUpdate].description = description;
                        setNotes(rows);
                    }
                },
                (_, error) => console.log(error)
            )
        )
    }

    return (
        <View style={{flex: 1}}>
            {
                !notes ? null : notes.length === 0 ?
                <View style={[StylesContainers.screen, StylesContainers.default]}>
                    <Text style={[StylesTexts.default, StylesContainers.alert]}> Нет записей </Text>
                </View>
                :
                <FlashList
                    data={notes}
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
                                        setItemDescription(item.description)
                                        setModalMore(true)
                                    }
                                }
                                onPress={
                                    () => {
                                        setItemId(item.id)
                                        setItemTitle(item.title)
                                        setItemDescription(item.description)
                                        setModalEdit(true);
                                    }
                                }
                                style={{marginBottom: screenPadding}}
                            >
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
                            onPress={() => { deleteNote(itemId); setModalMore(false); }}
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
                    title={itemTitle} description={itemDescription}
                    saveInputs={(t, d) => saveInputs(t, d)}
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
                                Создание новой заметки
                            </Text>
                            <View style={{ gap: 20 }}>
                                <TextInput
                                    autoFocus={true}
                                    inputMode="text"
                                    placeholder="Заголовок"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => inputSecond.current.focus()}
                                    returnKeyType={'next'}
                                    value={inputTitle}
                                    onChangeText={(v) => setInputTitle(v)}
                                    style={StylesTexts.input}
                                    placeholderTextColor={StylesTexts.placeholder.color}
                                    maxLength={50}
                                />
                                <TextInput
                                    ref={inputSecond}
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
                                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Отменить </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={ 0.5 }
                                    style={[StylesButtons.default, StylesButtons.bottom, StylesButtons.accept, { flex: 0.5 }]}
                                    onPress={() => addNote()}
                                >
                                    <Text style={[StylesTexts.default]}> Добавить </Text>
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
                    <Text style={StylesTexts.small}> Добавить новую заметку </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Notes;