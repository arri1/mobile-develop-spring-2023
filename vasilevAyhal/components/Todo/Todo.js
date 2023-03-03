import React, { useState } from "react";
import { View, FlatList, TextInput } from 'react-native';
import uuid from 'react-native-uuid';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesTodo from './styles/todo'

import TodoItem from './TodoItem'

import IconLine from '../../assets/svg/line'

const Todo = () => {
    const [todoItems, setTodoItems] = useState(() => [
        { id: uuid.v4(), title: 'task1', isComplete: true },
        { id: uuid.v4(), title: 'task2', isComplete: false },
        { id: uuid.v4(), title: 'task3', isComplete: false },
        { id: uuid.v4(), title: 'task1', isComplete: true },
        { id: uuid.v4(), title: 'task2', isComplete: false },
    ])
    const [inputTitle, setInputTitle] = useState('')

    const addTodoItem = () => {
        if(inputTitle.length > 0) {
            setTodoItems([
                ...todoItems,
                { id: uuid.v4(), title: inputTitle, isComplete: false }
            ])
            setInputTitle('')
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


    return (
        <View style={{flex: 1}}>
            <FlatList
                data={todoItems}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    () => ( <View style={{paddingTop: StylesContainers.screen.padding}}/> )
                }
                renderItem={
                    ({item}) => (
                        <View style={{paddingHorizontal: StylesContainers.screen.padding, paddingBottom: StylesContainers.screen.padding,}}>
                            <TodoItem
                                id={item.id}
                                title={item.title}
                                isComplete={item.isComplete}
                                setComplete={() => isCompleteTodoItem(item.id)}
                                setDelete={() => deleteTodoItem(item.id)}
                            />
                        </View>
                    )
                }
            />
             <TextInput
                inputMode="text"
                placeholder="Title"
                value={inputTitle}
                onChangeText={(v) => setInputTitle(v)}
                onSubmitEditing={addTodoItem}
                style={StylesTexts.input}
                placeholderTextColor={StylesTexts.placeholder.color}
            />
        </View>
    );
};

export default Todo;