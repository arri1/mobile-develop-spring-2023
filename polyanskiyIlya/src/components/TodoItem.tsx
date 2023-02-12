import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface TodoItemModel {
  title: string;
  id: number;
}

type Props = TodoItemModel & {
  deleteHandler: (id: number) => void;
};

function TodoItem({title, id, deleteHandler}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.todoTitle}>{title}</Text>
        <TouchableOpacity onPress={() => deleteHandler(id)}>
          <Image style={styles.trashIcon} source={require('./trash.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  border: {
    flexDirection: 'row',
    borderColor: '#A3AAAE',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  todoTitle: {
    fontSize: 16,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
});

export default TodoItem;
