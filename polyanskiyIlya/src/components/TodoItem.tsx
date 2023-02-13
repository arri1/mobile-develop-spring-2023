import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface TodoItemModel {
  title: string;
  id: number;
}

type Props = TodoItemModel & {
  deleteHandler: (id: number) => void;
};

const TodoItem = ({title, id, deleteHandler}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.todoTitle}>{title}</Text>
        <TouchableOpacity onPress={() => deleteHandler(id)}>
          <Icon name="trash-can-outline" color={'red'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
