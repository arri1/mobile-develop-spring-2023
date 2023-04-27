import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import Lab4 from "../screens/lab4";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarLabel: "LAB 1",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="checkbox-multiple-blank-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarLabel: "LAB 2",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="image-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lab4"
        component={Lab4}
        options={{
          tabBarLabel: "LAB 4",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="abacus"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
