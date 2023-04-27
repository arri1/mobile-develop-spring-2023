import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import lab4 from "./lab4";
import Lab2 from "./lab2";
import lab1 from "./lab1";


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "lab1") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Lab2") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Lab3") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "lab4") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "lab5") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }


          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Lab1"
        component={lab1}
        options={{ tabBarBadge: counter > 0 ? counter : null }}
      />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="lab4" component={lab4} />

    </Tab.Navigator>
  );
};

export default TabNavigation;