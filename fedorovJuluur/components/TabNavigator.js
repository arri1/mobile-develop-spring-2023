import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import lab4 from "./lab4";
import lab2 from "./lab2";
import lab1 from "./lab1";
import apollo from "./apollo";


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
          } else if (route.name === "lab2") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "lab4") {
            iconName = focused
              ? "ios-pluscircleo"
              : "ios-pluscircle";
          } else if (route.name === "apollo") {
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
      <Tab.Screen name="lab2" component={lab2} />
      <Tab.Screen name="lab4" component={lab4} />
      <Tab.Screen name="apollo" component={apollo} />
    </Tab.Navigator>
  );
};

export default TabNavigation;