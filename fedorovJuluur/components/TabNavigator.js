import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab2 from "./lab2";
import lab1 from "./lab1";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Lab1") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Lab2") {
            iconName = focused ? "home" : "home";
          } 
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Lab1" component={lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;