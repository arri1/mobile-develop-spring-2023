import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {CellModel} from '../../components/ListCell';
import ListView from '../../components/ListView';

const Lab1 = () => {
  const [todoList, setTodoList] = useState<CellModel[]>([
    {
      id: 0,
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis fermentum www',
    },
  ]);
  const [todoTextInput, setTodoInputText] = useState('');

  const removeTodoItem = (id: number) => {
    setTodoList(() => {
      return [...todoList.filter((todo: CellModel) => todo.id !== id)];
    });
  };

  return (
    <SafeAreaView>
      <Input
        placeholder="Текст задачи"
        value={todoTextInput}
        onChange={setTodoInputText}
      />
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
      <ListView cellList={todoList} removeHandler={removeTodoItem} />
    </SafeAreaView>
  );
};

export default Lab1;
