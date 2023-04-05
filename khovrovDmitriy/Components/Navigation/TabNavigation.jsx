import TodoUseState from "../Screens/TodoUseState";
import Lab3 from "../Screens/Lab3";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Lab5 from "../Screens/Lab5";
import { useSelector } from "react-redux";
import { DARK_MODE } from "../../Components/Lab5/DarkModeConstStates";
import RickMortyCharacters from "../Screens/RickMortyCharacters";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const darkModeState = useSelector((state) => state.darkMode.value);
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
            let iconName =
              route.name == "Lab5" ? "contrast-outline" : "flask-outline";
            iconName = route.name == "Lab3" ? "funnel-outline" : iconName;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor:
            darkModeState == DARK_MODE ? "white" : "black",
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
        <Tab.Screen
          name="Rick and morty characters"
          component={RickMortyCharacters}
          options={{
            title: "Rick and morty characters",
            headerStyle: { backgroundColor: "#FF834E" },
            tabBarStyle: {
              backgroundColor: "#FF834E",
            },
            headerTintColor: "#fff",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
