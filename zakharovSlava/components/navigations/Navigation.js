import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Laba1 from "../../assets/svg/icon-laba1";
import Laba2 from "../../assets/svg/icon-laba2";


import Task1 from "../screens/Task1";
import Task2 from "../screens/Task2";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, colour }) => {
          return route.name === "laba1" ? (
            <Laba1 />
          ) : route.name === "laba2" ? (
            <Laba2 />
          ) : (
            "null"
          );
        },
      })}
    >
      <Tab.Screen name="laba1" component={Task1} />
      <Tab.Screen name="laba2" component={Task2} />
  
    </Tab.Navigator>
  );
};

export default Navigation;
