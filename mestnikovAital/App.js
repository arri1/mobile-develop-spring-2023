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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const colors = ["green", "white", "orange", "black"];

function DetailsScreen() {
  return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
          </View>
  );
}

function HomeScreen({ navigation }) {
  return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
            />
          </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
            />
          </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
          <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
          </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
          </SettingsStack.Navigator>
  );
}
function square(n) {
  return n * n;
}
const Tab = createBottomTabNavigator();
const handleButtonPress = () => Alert.alert("img pressed")
const App = () => {
  const [count, setCount] = useState(2);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    setCurrentDate(
            date + '/' + month + '/' + year
    );
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors[backgroundColorIndex],
        flex: 1,
        justifyContent: "center",
      }}
    >
      <TouchableHighlight onPress={handleButtonPress}>
        <Image
          blurRadius={2}
          source={require("./images/moon.png")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={handleButtonPress}>
        <Image
          blurRadius={2}
          source={require("./images/sun.png")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </TouchableHighlight>
      <View style={{ margin: 15 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "blue", fontSize: 20, fontWeight: "800" }}>
            {count}
          </Text>
            <Text style={{ color: "purple", fontSize: 20, fontWeight: "800" }}>
                {currentDate}
            </Text>
        </View>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 20, fontWeight: "800" }}>
            Square it
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCount(square(count));
          }}
          style={{
            marginTop: 40,
            borderRadius: 10,
            height: 40,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        />

        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 20, fontWeight: "800" }}>
            Reset
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
            setCount(2);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        />
      </View>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
