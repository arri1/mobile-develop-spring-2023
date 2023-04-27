import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Lab1 from "../screens/lab1";
import Lab3 from "../screens/lab3";
import Lab5 from "../screens/lab5";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Lab1") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Lab3") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Lab5") {
            iconName = focused ? "home" : "home";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab5" component={Lab5} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
