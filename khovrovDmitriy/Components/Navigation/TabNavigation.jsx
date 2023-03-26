import TodoUseState from "../Screens/TodoUseState";
import Lab3 from "../Screens/Lab3";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Lab5 from "../Screens/Lab5";
import { useSelector } from "react-redux";
import {
  DEFAULT_MODE,
  DARK_MODE,
} from "../../Components/Lab5/DarkModeConstStates";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const darkModeState = useSelector((state) => state.darkMode.value)
  const darkModeBackground = {
    title: "Todo",
    headerStyle: { backgroundColor: "#242526" },
    tabBarStyle: {
      backgroundColor: "#242526",
    },
    headerTintColor: "#fff",
  };

  const defaultModeBackground = {
    title: "Todo",
    headerStyle: { backgroundColor: "#838FFF" },
    tabBarStyle: {
      backgroundColor: "#838FFF",
    },
    headerTintColor: "#fff",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "flask-outline";

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: darkModeState == DARK_MODE?"white":"black",
        })}
      >
        <Tab.Screen
          name="Lab1 Lab2"
          component={TodoUseState}
          options={
            darkModeState == DARK_MODE
              ? { ...darkModeBackground, title: "Lab1 Lab2" }
              : { ...defaultModeBackground, title: "Lab1 Lab2" }
          }
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={
            darkModeState == DARK_MODE
              ? { ...darkModeBackground, title: "Lab3" }
              : { ...defaultModeBackground, title: "Lab3" }
          }
        />
        <Tab.Screen
          name="Lab5"
          component={Lab5}
          options={
            darkModeState == DARK_MODE
              ? { ...darkModeBackground, title: "Lab5" }
              : { ...defaultModeBackground, title: "Lab5" }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
