import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";
import Dom from "./assets/svg/dom"
import Earth from "./assets/svg/earth"
import User from "./assets/svg/user";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {height: '0%'},
        tabBarItemStyle: {
          justifyContent: 'center',
          bottom:93,
          flex:0.2,
          marginHorizontal: '5%',
          minWidth: '15%',
          left:20,
          elevation:6,
          backgroundColor:'#ffffff',
          borderRadius:90,
          height:75
      },
       headerRightContainerStyle:'true',
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {fontSize:0},
        tabBarIcon: ({focused, color}) => {
          if (route.name == 'Lab1') return <Dom color={color}/>
          if (route.name == 'Lab2') return <Earth color={color}/>
          if (route.name == 'Lab3') return <User color={color}/>
          return null
        },
        tabBarIconStyle:{flex: 0.84}
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;