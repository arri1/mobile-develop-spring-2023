import React, { useState, useRef } from "react";
import { Alert, Modal, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import StylesContainers from '../style/containers'
import StylesButtons from '../style/buttons'
import StylesTexts from '../style/texts'
import StylesTodo from './styles/todo'

import TodoItem from './TodoItem'

import IconPlus from '../../assets/svg/plus'
import IconClose from "../../assets/svg/close";

const Todo = () => {
    const screenPadding = StylesContainers.screen.padding
    const [todoItems, setTodoItems] = useState(() => [
        { id: uuid.v4(), title: '1', description: "description", isComplete: true },
        { id: uuid.v4(), title: '2', description: "sad asd as", isComplete: false },
        { id: uuid.v4(), title: '3', description: "description", isComplete: false },
        { id: uuid.v4(), title: '4', description: "description", isComplete: true },
        { id: uuid.v4(), title: '5', description: "description", isComplete: false },
        { id: uuid.v4(), title: '6', description: "description", isComplete: false },
        { id: uuid.v4(), title: '7', description: "description", isComplete: false },
        { id: uuid.v4(), title: '9', description: "description", isComplete: false },
        { id: uuid.v4(), title: '10', description: "description", isComplete: false },
        { id: uuid.v4(), title: '11', description: "description", isComplete: false },
        { id: uuid.v4(), title: '12', description: "description", isComplete: false },
        { id: uuid.v4(), title: '13', description: "description", isComplete: false },
        { id: uuid.v4(), title: '14', description: "description", isComplete: false },
        { id: uuid.v4(), title: '15', description: "description", isComplete: false },
        { id: uuid.v4(), title: '16', description: "description", isComplete: false },
        { id: uuid.v4(), title: '17', description: "description", isComplete: false },
        { id: uuid.v4(), title: '18', description: "description", isComplete: false },
        { id: uuid.v4(), title: '19', description: "description", isComplete: false },
        { id: uuid.v4(), title: '20', description: "description", isComplete: false },
        { id: uuid.v4(), title: '21', description: "description", isComplete: false },
        { id: uuid.v4(), title: '22', description: "description", isComplete: false },
        { id: uuid.v4(), title: '23', description: "description", isComplete: false },
    ])
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState("")
    const inputSecond = useRef(null)

    const addTodoItem = () => {
        if(inputTitle.length > 0) {
            setTodoItems([
                { id: uuid.v4(), title: inputTitle, description: inputDescription, isComplete: false },
                ...todoItems
            ])
            setInputTitle('')
            setInputDescription("")
            setModalVisible(false)
        } else {
            Alert.alert("Error", "Title empty!")
        }
    }
   
    const isCompleteTodoItem = (id) => {
        setTodoItems(todoItems.map(
            (item) => {
                if (item.id === id) item.isComplete = !item.isComplete
                return item
            }
        ))
    }

    const deleteTodoItem = (id) => {
        let items = [...todoItems]
        items.splice(todoItems.findIndex((item) => { return item.id === id }), 1)
        setTodoItems(items)
    }
    const [modalVisible, setModalVisible] = useState(false)


    return (
        <View style={{flex: 1}}>
            <FlatList
                data={todoItems}
                keyExtractor={(item) => item.id}
                stickyHeaderHiddenOnScroll={true}
                stickyHeaderIndices={[0]}
                ListHeaderComponentStyle={{ alignItems: 'center', margin: screenPadding }}
                ListHeaderComponent={
                    () => (
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={StylesTodo.TodoListHeader}>
                                <IconPlus size={30} color={'black'}/>
                                <Text style={StylesTexts.small}> Add </Text>
                        </TouchableOpacity>
                    )
                }
                renderItem={
                    ({item}) => (
                        <View style={{ paddingHorizontal: screenPadding, paddingBottom: screenPadding}}>
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
                                onPress={() => setModalVisible(false)}
                                style={[StylesButtons.default, { height: 35, backgroundColor: 'black' }]}
                            >
                                <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Cancel </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => addTodoItem()}
                                style={[StylesButtons.default, { height: 35, backgroundColor: 'green' }]}
                            >
                                <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Add </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Todo;