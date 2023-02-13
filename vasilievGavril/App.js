import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Modal,
  StyleSheet, 
  Button,
  Text, 
  Pressable,
  SafeAreaView,
  View, 
  Image,
  Alert,
} from 'react-native';

import Home from './indexs/home';
import Navi2 from './indexs/navi2';
const Tab = createBottomTabNavigator();

const App = () => {
  const [count, setCount] = useState(0)

  const addBarBadge = () => {
      setCount(count+1)
  }
  const removeBarBadge = () => {
      if(count != 0) setCount(count-1)
  }


  return (
      <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
              <Tab.Navigator
                  screenOptions={{
                      tabBarStyle: { height: '8%' },
                      tabBarItemStyle: { flexDirection: 'column', justifyContent: 'center' },

                      tabBarLabelStyle: { margin: 0, fontSize: 20, width: '50%' },
                  }}
              >
                  <Tab.Screen name="Home" children={() => <Home addBarBadge={addBarBadge}/>} options={count != 0 ? { tabBarBadge: count } : ''}/>
                  <Tab.Screen name="Navi2" children={() => <Navi2 removeBarBadge={removeBarBadge}/>} />
              </Tab.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  );
};

export default App