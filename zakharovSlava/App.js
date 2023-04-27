import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/navigations/Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;