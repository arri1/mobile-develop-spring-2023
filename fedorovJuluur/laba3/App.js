import React, { useState, useCallback, useEffect } from 'react';
import { Button,Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cafe from './Cafe'
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cafe/>
    </View>
  );
}

function textmodal() {
  const [facts, setFacts] = useState([]);

  const handleFetchCatFacts = useCallback(async () => {
    const result = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4');
    const facts = await result.json();
    if (result.ok) {
      setFacts(facts);
    }
  });

  useEffect(() => {
    handleFetchCatFacts();
  }, []);
  return (
    <View style={{ fontSize: 20, flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 20
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'textmodal') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'darkred',
      })}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="textmodal" component={textmodal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}