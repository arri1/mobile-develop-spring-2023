import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Test from "../screens/test";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Lab1") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Lab2") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Test") {
            iconName = focused ? "home" : "home";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Test" component={Test} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
