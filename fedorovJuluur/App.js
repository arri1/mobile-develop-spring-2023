import React, { useState, useCallback, useEffect } from "react";
import {
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import lab1 from "./components/lab1";
import Ionicons from "react-native-vector-icons/Ionicons";
import Lab2 from "./components/lab2";
import Lab3 from "./components/lab3";

function HomeScreen() {
  return (
    <View>
      <Lab2 />
    </View>
  );
}
function useMemo(){
  return (
    <View>
      <Lab3 />
    </View>
  )
}

function textmodal() {
  const [facts, setFacts] = useState([]);

  const handleFetchCatFacts = useCallback(async () => {
    const result = await fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4"
    );
    const facts = await result.json();
    if (result.ok) {
      setFacts(facts);
    }
  });

  useEffect(() => {
    handleFetchCatFacts();
  }, []);
  return (
    <View
      style={{
        fontSize: 20,
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
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
    fontSize: 20,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "textmodal") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "useMemo") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "darkred",
        })}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="textmodal" component={textmodal} />
        <Tab.Screen name="useMemo" component={Lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}