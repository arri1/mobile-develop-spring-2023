import TodoUseState from "../Screens/TodoUseState";
import Lab3 from "../Screens/Lab3";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
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
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Lab1 Lab2"
          component={TodoUseState}
          options={{
            title: "Todo",
            headerStyle: {
              backgroundColor: "#838FFF",
            },
            tabBarStyle: {
              backgroundColor: "#838FFF",
            },
            headerTintColor: "#fff",
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={{
            title: "Lab3",
            headerStyle: {
              backgroundColor: "#838FFF",
            },
            tabBarStyle: {
              backgroundColor: "#838FFF",
            },
            headerTintColor: "#fff",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
