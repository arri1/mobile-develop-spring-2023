import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Dimensions, Alert } from 'react-native';
import Todo from '../Lab1/Todo';
import AddButton from '../Lab1/AddButton';
import DeleteButton from '../Lab1/DeleteButton';
import TodoModal from '../ModalWindows/TodoModal';

const screenWidth = Dimensions.get('window').width;

const TodoUseState = () => 
{
  const [todos,setTodos] = useState([{id:Date.now(),text:'Мыть посуду',priority:0}]);
  const [text, setText] = useState('')
  const [activeModal, SetActiveModal] = useState(false)
  const [choosedTodo,SetChoosedTodo] = useState({})

  const TouchTodo = (todo) =>
  {
    SetActiveModal(true);

    SetChoosedTodo(todo);
  }
  

  return (
    <View style={styles.container}>
    <TodoModal 
    activeModal={activeModal} 
    SetActiveModal={SetActiveModal} 
    choosedTodo={choosedTodo}
    todos={todos}
    SetTodos={setTodos}
    />
    <View style={styles.todos}>
      <ScrollView contentContainerStyle={styles.scrollView}>
          {todos.map((todo) => <Todo key={todo.id} todo={todo} TouchTodo={TouchTodo}/>)}
      </ScrollView>
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
export default TodoUseState;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#f0f3f7',
    },
    todos:
    {
      flex:3,
      alignItems:'center'
    },
    scrollView:
    {
      width:screenWidth,
      alignItems:'center'
    },
    form:
    {
      flex:1,
      alignItems:'center',
      marginBottom:40
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

