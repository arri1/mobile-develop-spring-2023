import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colors = ['red', 'white', 'blue', 'black'];
const App = () => {
  const [count,setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(0);

  return (
    <SafeAreaView
      style={{
        backgroundColor,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View style={{ margin: 15}}>
        <View style={{alignItems: "center"}}>
          <Text style={{color: "white", fontSize: "20", fontWeight: "800"}}>
            {count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={{ 
            marginTop: 10,
            borderRadius: 10, 
            height: 40, 
            backgroundColor: "blue" 
          }}
        />
        <TouchableOpacity
          onPress={() => {
            console.log((backgroundColorIndex + 1) % ())
          }}
          style={{ 
            marginTop: 10,
            borderRadius: 10, 
            height: 40, 
            backgroundColor: "blue" 
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App
