import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome5 } from '@expo/vector-icons';
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import Lab5 from "../screens/lab5";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Lab1") {
                        iconName = focused ? "cloud-sun" : "cloud";
                    } else if (route.name === "Lab2") {
                        iconName = focused ? "cloud-sun" : "cloud";
                    } else if (route.name === "Lab3") {
                        iconName = focused ? "cloud-rain" : "cloud";
                    } else if (route.name === "Lab5") {
                        iconName = focused ? "cloud-sun" : "cloud";
                    }

                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Lab1" component={Lab1} />
            <Tab.Screen name="Lab2" component={Lab2} />
            <Tab.Screen name="Lab3" component={Lab3} />
            <Tab.Screen name="Lab5" component={Lab5} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
