import TodoUseState  from '../Screens/TodoUseState';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () =>
{
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Lab1 Lab2" component={TodoUseState} />
          </Tab.Navigator>
      </NavigationContainer>
      );
}

export default TabNavigation;