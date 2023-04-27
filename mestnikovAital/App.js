import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./components/Lab1";
import Lab2 from "./components/Lab2";
import Lab3 from "./components/Lab3";
import Ionicons from "react-native-vector-icons/Ionicons";

const App = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={() => ({
                  tabBarActiveTintColor: "#94a0e7",
                  tabBarInactiveTintColor: "#d0dded",
                  headerShown: false,
                  tabBarStyle: {
                      height: 60,
                      paddingHorizontal: 5,
                      paddingTop: 10,
                      paddingBottom: 5,
                      backgroundColor: "black",
                      position: "absolute",
                  },
              })}
      >
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarLabel: "Lab1",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-image" color={color} size={size} />
            ),
            tabBarBadge: 1,
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarLabel: "Lab2",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-moon" color={color} size={size} />
            ),
            tabBarBadge: 1,
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={{
            tabBarLabel: "Lab3",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-book" color={color} size={size} />
            ),
            tabBarBadge: 1,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
