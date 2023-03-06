import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused ? "note-text" : "note-text-outline";
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Lab 1" component={Lab1} />
      <Tab.Screen name="Lab 2" component={Lab2} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
