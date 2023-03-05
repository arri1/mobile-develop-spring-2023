import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import task1 from "./screens/task1.js";
import task2 from "./screens/task2.js"

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={task1} />
      <Tab.Screen name="Lab2" component={task2} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;