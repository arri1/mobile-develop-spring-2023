import TabNavigation from "./components/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/index";
import * as React from "react";


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