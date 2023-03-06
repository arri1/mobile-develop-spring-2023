import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './UI/screens/HomeScreen'
import { LearnScreen } from './UI/screens/LearnScreen'
import home from './assets/images/home.png'
import book from './assets/images/readingbook.png'
import { COLORS } from './assets/Styles'


const Tab = createBottomTabNavigator();


export const Navigate = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
        >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
        style={styles.logo}
        source={ home }
            />
          ),
        }}
      />
      <Tab.Screen
        name="learn"
        component={LearnScreen}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({ color, size }) => (
            <Image
        style={styles.logo}
        source={ book }
            />
          ),
        }}
      />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
logo: {
  width: 35,
  height: 35
}
});
