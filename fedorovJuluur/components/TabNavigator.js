import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab2 from "./lab2";
import lab1 from "./lab1";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="lab1" component={lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
    </Tab.Navigator>
    );
};

export default TabNavigation;