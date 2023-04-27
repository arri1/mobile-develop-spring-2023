import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/navigations/Navigation";

import store from "./components/redux";

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
