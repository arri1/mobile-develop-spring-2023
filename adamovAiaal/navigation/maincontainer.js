import * as React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Task1Screen from "./screens/task1";
import Task2Screen from "./screens/task2";
import Task3Screen from "./screens/task3";
import Task4Screen from "./screens/task4";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#694D4B" />
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: "#DBDBDB",
          tabBarActiveTintColor: "#E1B1AD",
          tabBarStyle: {
            backgroundColor: "#694D4B",
            borderTopWidth: 3,
            borderTopColor: "#E1B1AD",
          },
          headerStyle: {
            backgroundColor: "#694D4B",
          },
          headerTitleStyle: {
            color: "#E1B1AD",
          },
        }}
      >
        <Tab.Screen name="Task1" component={Task1Screen} />
        <Tab.Screen name="Task2" component={Task2Screen} />
        <Tab.Screen name="Task3" component={Task3Screen} />
        <Tab.Screen name="Task4" component={Task4Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
