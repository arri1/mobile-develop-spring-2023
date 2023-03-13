import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import firstTask from "./firstTask";
import secondTask from "./secondTask";
import first from "../assets/first.png";
import second from "../assets/second.png";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="firstTask"
          component={firstTask}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={first} />,
          }}
        />
        <Tab.Screen
          name="secondTask"
          component={secondTask}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={second} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
