import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Calculator from "../screens/calculator";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'LabScreen1') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'LabScreen2') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
            else if (route.name === 'CalculatorScreen') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons  name={iconName} size={size} color={color} />;
        },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
};

export default TabNavigation;