import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Laba1 from "../../assets/svg/icon-laba1";
import Laba2 from "../../assets/svg/icon-laba2";
import Laba3 from "../../assets/svg/icon-laba3";
import Redux from "../../assets/svg/icon-redux";
import LabaGraphQL from "../../assets/svg/icon-graphql";

import Task1 from "../screens/Task1";
import Task2 from "../screens/Task2";
import Task3 from "../screens/Task3";
import Taskredux from "../screens/redux";
import GraphQl from "../apollo";

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
          ) : route.name === "laba3" ? (
            <Laba3 />
          ) : route.name === "redux" ? (
            <Redux />
          ) : route.name === "graphql" ? (
            <LabaGraphQL />
          ) : (
            "null"
          );
        },
      })}
    >
      <Tab.Screen name="laba1" component={Task1} />
      <Tab.Screen name="laba2" component={Task2} />
      <Tab.Screen name="laba3" component={Task3} />
      <Tab.Screen name="redux" component={Taskredux} />
      <Tab.Screen name="graphql" component={GraphQl} />
    </Tab.Navigator>
  );
};

export default Navigation;
