import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import Todo from "../Lab1/Todo";
import AddButton from "../Lab1/AddButton";
import DeleteButton from "../Lab1/DeleteButton";
import TodoModal from "../ModalWindows/TodoModal";
import TitleList from "../Lab4/TitleList";
import MainTextInput from "../Lab1/MainTextInput";
import { useSelector } from "react-redux";
import { DEFAULT_MODE } from "../../Components/Lab5/DarkModeConstStates";

const screenWidth = Dimensions.get("window").width;

const TodoUseState = () => {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "Мыть посуду", priority: 0 },
  ]);
  const [text, setText] = useState("");
  const [activeModal, SetActiveModal] = useState(false);
  const [choosedTodo, SetChoosedTodo] = useState({});
  const darkModeState = useSelector((state) => state.darkMode.value);

  const TouchTodo = (todo) => {
    SetActiveModal(true);

    SetChoosedTodo(todo);
  };

  const compareSortByText = (a, b) => {
    return a.text.charCodeAt() - b.text.charCodeAt();
  };

  const sortedTodosByText = useMemo(() => {
    return todos.sort(compareSortByText);
  }, [todos]);

  return (
    <View
      style={
        darkModeState == DEFAULT_MODE ? styles.container : styles.containerDark
      }
    >
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
          {sortedTodosByText.map((todo) => (
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
    backgroundColor: "white",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#1B1B1D",
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
