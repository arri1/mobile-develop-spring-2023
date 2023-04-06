import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Lab 1") {
            iconName = focused ? "note-text" : "note-text-outline";
          } else if (route.name === "Lab 2") {
            iconName = focused
              ? "application-braces"
              : "application-braces-outline";
          } else if (route.name === "Lab 3") {
            iconName = focused
              ? "clock-time-eight"
              : "clock-time-eight-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Lab 1" component={Lab1} />
      <Tab.Screen name="Lab 2" component={Lab2} />
      <Tab.Screen name="Lab 3" component={Lab3} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
