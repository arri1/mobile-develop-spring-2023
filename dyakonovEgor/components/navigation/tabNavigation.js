import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/FontAwesome";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
