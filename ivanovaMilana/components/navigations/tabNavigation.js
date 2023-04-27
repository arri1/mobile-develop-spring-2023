import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import Lab5 from "../screens/lab5";
import { Provider } from "react-redux";
import { store } from '../redux/store';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        
            <Tab.Navigator>
                <Tab.Screen name="Lab1" component={Lab1} />
                <Tab.Screen name="Lab2" component={Lab2} />
                <Tab.Screen name="Lab3" component={Lab3} />
                <Tab.Screen name="Lab5" component={()=><Provider store={store}><Lab5 /></Provider>} />
            </Tab.Navigator>
    );
};

export default TabNavigation;