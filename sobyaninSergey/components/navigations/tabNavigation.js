import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "white",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 10,
          paddingBottom: 5,
          backgroundColor: "darkred",
          position: "absolute",
        },
      })}
    >
      <Tab.Screen
        name="LAB 1"
        component={Lab1}
        options={{
          tabBarLabel: "LAB 1",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="checkbox-multiple-blank-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LAB 2"
        component={Lab2}
        options={{
          tabBarLabel: "LAB 2",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="image-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LAB 3"
        component={Lab3}
        options={{
          tabBarLabel: "LAB 3",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="memory" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
