
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/TabNavigator";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;