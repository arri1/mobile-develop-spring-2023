import * as React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Lab3 from "./Labs/Lab3";
import Lab4 from "./Labs/Lab4";
import Lab5 from "./Labs/Lab5";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                if (route.name == "Lab1") {
                  iconName = focused ? "numeric-1-box" : "numeric-1";
                }
                if (route.name == "Lab2") {
                  iconName = focused ? "numeric-2-box" : "numeric-2";
                }
                if (route.name == "Lab3") {
                  iconName = focused ? "numeric-3-box" : "numeric-3";
                }
                if (route.name == "Lab4") {
                  iconName = focused ? "numeric-4-box" : "numeric-4";
                }
                if (route.name == "Lab5") {
                  iconName = focused ? "numeric-5-box" : "numeric-5";
                }
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              },
            })}
          >
            <Tab.Screen name="Lab1" component={Lab1} />
            <Tab.Screen name="Lab2" component={Lab2} />
            <Tab.Screen name="Lab3" component={Lab3} />
            <Tab.Screen name="Lab4" component={Lab4} />
            <Tab.Screen name="Lab5" component={Lab5} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
