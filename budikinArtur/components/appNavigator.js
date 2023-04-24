import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import firstTask from "./firstTask";
import secondTask from "./secondTask";
import thirdTask from "./thirdTask";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

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
        <Tab.Screen
          name="thirdTask"
          component={thirdTask}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={third} />,
          }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default TabNavigator;
