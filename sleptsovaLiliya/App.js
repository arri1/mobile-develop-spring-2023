import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Cake from "./assets/svg/cake"
import Chameleon from "./assets/svg/chameleon"

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {height: '8%'},
        tabBarItemStyle: {justifyContent: 'center'},
        tabBarLabelStyle: {fontSize:15},
        tabBarIcon: ({focused, color}) => {
          if (route.name == 'Lab1') return <Cake/>
          else if (route.name == 'Lab2') return <Chameleon/>
          return null
        },
        tabBarIconStyle:{flex: 0.84}
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;