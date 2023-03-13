import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import Todo from "../Lab1/Todo";
import AddButton from "../Lab1/AddButton";
import DeleteButton from "../Lab1/DeleteButton";
import TodoModal from "../ModalWindows/TodoModal";
import TitleList from "../Lab4/TitleList";
import MainTextInput from "../Lab1/MainTextInput";

const screenWidth = Dimensions.get("window").width;

const TodoUseState = () => {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "Мыть посуду", priority: 0 },
  ]);
  const [text, setText] = useState("");
  const [activeModal, SetActiveModal] = useState(false);
  const [choosedTodo, SetChoosedTodo] = useState({});

  const TouchTodo = (todo) => {
    SetActiveModal(true);

    SetChoosedTodo(todo);
  };

  return (
    <View style={styles.container}>
      <TodoModal
        activeModal={activeModal}
        SetActiveModal={SetActiveModal}
        choosedTodo={choosedTodo}
        todos={todos}
        SetTodos={setTodos}
      />
      <TitleList />
      <View style={styles.todos}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} TouchTodo={TouchTodo} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.form}>
        <MainTextInput setText={setText} text={text} />
        <AddButton
          todos={todos}
          setTodos={setTodos}
          text={text}
          setText={setText}
        />
        <DeleteButton setTodos={setTodos} />
      </View>
    </View>
  );
};
export default TodoUseState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f7",
  },
  todos: {
    flex: 2,
    alignItems: "center",
  },
  scrollView: {
    width: screenWidth,
    alignItems: "center",
  },
  form: {
    flex: 1,
    alignItems: "center",
    marginBottom: 40,
  },
});
