import TabNavigator from "./components/navigation/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./components/screens/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
