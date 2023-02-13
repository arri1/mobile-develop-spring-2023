import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import Todo from './Componenets/Todo';
import AddButton from './Componenets/AddButton';
import DeleteButton from './Componenets/DeleteButton';

export default function App() {
  const [todos,setTodos] = useState([{id:Date.now(),text:'Мыть посуду'}]);
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.todos}>
        {todos.map((todo) => <Todo text={todo.text}/>)}
      </View>
      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        onChangeText={setText}
        value={text}
        />
        <AddButton 
        todos={todos}
        setTodos={setTodos} 
        text={text}
        setText={setText}
        />

        <DeleteButton setTodos={setTodos}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f0f3f7',
  },
  todos:
  {
    flex:3,
    alignItems:'center',
    paddingTop:40,
    overflow:'scroll'
  },

  form:
  {
    flex:1,
    alignItems:'center',

  },
  input:
  {
    backgroundColor:'white',
    margin:20,
    padding:10,
    borderColor:'black',
    width:"90%",
    height:40,
    textAlign:'center',
    borderWidth:1,
    borderRadius:10,
    borderColor:'silver'
  }
});
