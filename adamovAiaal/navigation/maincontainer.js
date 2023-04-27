import * as React from "react";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Task1Screen from "./screens/task1";
import Task2Screen from "./screens/task2";
import Task3Screen from "./screens/task3";
import Task4Screen from "./screens/task4";
import Task5Screen from "./screens/task5";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#694D4B" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Test":
                iconName = focused ? "flask" : "flask-outline";
                break;
              case "Effect":
                iconName = focused
                  ? "game-controller"
                  : "game-controller-outline";
                break;
              case "Memo":
                iconName = focused ? "eye" : "eye-outline";
                break;
              case "Redux":
                iconName = focused ? "trending-up-outline" : "logo-usd";
                break;
              case "Earth":
                iconName = focused ? "earth" : "earth-outline";
              default:
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Test" component={Task1Screen} />
        <Tab.Screen name="Effect" component={Task2Screen} />
        <Tab.Screen name="Memo" component={Task3Screen} />
        <Tab.Screen name="Redux" component={Task4Screen} />
        <Tab.Screen name="Earth" component={Task5Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
