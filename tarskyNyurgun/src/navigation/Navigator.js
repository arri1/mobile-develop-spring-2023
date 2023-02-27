import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Labs
import { Lab1 } from "../labs/Lab1";
import { Lab2 } from "../labs/Lab2";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Lab1"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Lab1") {
              iconName = focused ? "car-sport" : "car-sport-outline";
            } else if (route.name == "Lab2") {
              iconName = focused ? "logo-octocat" : "logo-octocat";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70 },
        })}
      >
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { Navigator };
