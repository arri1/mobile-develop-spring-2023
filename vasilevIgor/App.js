import TabNavigation from "./components/navigations/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

const App = () => {
  return (
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
  );
};


export default App;
