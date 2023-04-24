import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import task1 from './screens/task1.js';
import task2 from './screens/task2.js';
import task3 from './screens/task3.js';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={task1}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/icon_calc.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Lab2" component={task2} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/icon_pen.png')}
                />
              );
            },
          }}/>
        <Tab.Screen name="Lab3" component={task3} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/icon_cloud.png')}
                />
              );
            },
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
