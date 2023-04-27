import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./components/Lab1";
import Lab2 from "./components/Lab2";
import Lab3 from "./components/Lab3";
import Lab5 from "./components/Lab5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import { store } from './components/redux/store';

const App = () => {
    const Tab = createBottomTabNavigator();
  return (
          <Provider store={store}>
              <Lab5 />
          </Provider>
  );
}

export default App;
