import { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Lab1 from "./components/Lab1.js";
import Lab2 from "./components/Lab2.js";
import Lab3 from "./components/Lab3.js";

const img = require("./images/moon.png");

const Tab = createBottomTabNavigator();
const App = () => {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + "." + month + "." + year);
  }, []);

  return (
    <SafeAreaView>
      <View style={{ marginTop: 45 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "purple", fontSize: 14, fontWeight: "800" }}>
            {currentDate}
          </Text>
        </View>
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
        >
          <Tab.Screen name="LAB 1" component={Lab1} />
          <Tab.Screen name="LAB 2" component={Lab2} />
          <Tab.Screen name="LAB 3" component={Lab3} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
