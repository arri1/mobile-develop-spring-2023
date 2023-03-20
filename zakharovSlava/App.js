import { useState, useEffect} from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Button, Switch} from "react-native";


const colors = ["white", "black"];
const colorstext = ["black", "white"];

const App = () => {
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);


  const plusClick = () => {
    setCount(count + 1);
  };

  const minusClick = () => {
    if (count > 0) setCount(count - 1);
  };

  const themes = () => {
    if (!isEnabled) {
      setBackgroundColorIndex(1)
    }
    else {
      setBackgroundColorIndex(0)
    }
  }

  return (
    <SafeAreaView 
      style={{
        backgroundColor: colors[backgroundColorIndex],
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ margin: 20 }}>  
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: colorstext[backgroundColorIndex], fontSize: 20, fontWeight: "800" }}>
            {count}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={plusClick} >
          <Text style = {{color: colors[backgroundColorIndex]}}>+</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={minusClick} >
          <Text style = {{color: colors[backgroundColorIndex]}}>-</Text> 
        </TouchableOpacity>
        <View style={styles.container}>

          <Switch
            trackColor={{false: '#767577', true: '#45ff83'}}
            thumbColor={isEnabled ? '#f4f3f4' : 'white'}
            ios_backgroundColor="#f2f2f7"

            onValueChange={toggleSwitch}
            onChange = {themes}
            value={isEnabled}
          />



        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10
  },

  button: {
    alignItems: 'center',
    backgroundColor: "gray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,


  },
});
export default App;