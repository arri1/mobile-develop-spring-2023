import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Styles from './styles/Styles'

import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";
import Lab5 from "./screens/Lab5";
import Lab6 from "./screens/Lab6";


import Dom from "./assets/svg/dom"
import Earth from "./assets/svg/earth"
import User from "./assets/svg/user";
import Alarm from "./assets/svg/alarm";

const Tab = createBottomTabNavigator();

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SafeAreaView } from "react-native-safe-area-context";
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarStyle: {height: '0%'},
              tabBarItemStyle: Styles.tabNavigator,
              tabBarActiveTintColor: "orange",
              tabBarInactiveTintColor: "black",
              tabBarLabelStyle: {fontSize:0},
              tabBarIconStyle:{flex: 0.84},
              tabBarIcon: ({focused, color}) => {
                if (route.name == 'Lab1') return <Dom color={color}/>
                if (route.name == 'Lab2') return <Earth color={color}/>
                if (route.name == 'Lab3') return <Alarm color={color}/>
                if (route.name == 'Lab5') return <User color={color}/>
                if (route.name == 'Lab6') return <Earth color={color}/>
                return null
              }
            })}
          >
            <Tab.Screen name="Lab1" component={Lab1} />
            <Tab.Screen name="Lab2" component={Lab2} />
            <Tab.Screen name="Lab3" component={Lab3} />
            <Tab.Screen name="Lab5" component={Lab5} />
            <Tab.Screen name="Lab6" component={Lab6} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;