import TabNavigation from "./components/tab_navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
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