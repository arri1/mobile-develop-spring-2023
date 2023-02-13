import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import TodoItem, {TodoItemModel} from '../../components/TodoItem';

const Lab1 = () => {
  const removeTodoItem = (id: number) => {
    setTodoList(() => {
      return [...todoList.filter((todo: TodoItemModel) => todo.id !== id)];
    });
  };

  const [todoList, setTodoList] = useState<TodoItemModel[]>([
    {
      id: 0,
      title: 'hello world',
    },
  ]);
  const [todoTextInput, setTodoInputText] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        editable
        placeholder="Задача"
        value={todoTextInput}
        onChangeText={setTodoInputText}
      />
      <View>
        {todoList.map(item => (
          <TodoItem key={item.id} {...item} deleteHandler={removeTodoItem} />
        ))}
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Добавить задачу"
          onPress={() => {
            if (todoTextInput.length === 0) {
              return;
            }

            setTodoList(prev => {
              const newTodoId = Math.max(...prev.map(todo => todo.id), -1) + 1;

              return [
                ...prev,
                {
                  id: newTodoId,
                  title: todoTextInput,
                },
              ];
            });
            setTodoInputText('');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Lab1;
