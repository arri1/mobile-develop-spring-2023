import * as React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Task1Screen from "./screens/task1";
import Task2Screen from "./screens/task2";
import Task3Screen from "./screens/task3";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Task1" component={Task1Screen} />
        <Tab.Screen name="Task2" component={Task2Screen} />
        <Tab.Screen name="Task3" component={Task3Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
