import React, { useState } from "react";
import { Text, View,StyleSheet, TouchableOpacity } from "react-native";
import {Button} from 'react-native';


const lab1 = () => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    
    <View style={styles.container}>
    <Text style={styles.commonText}>
      I'm Andrew, and I {isHungry ? 'died' : 'full'}!
    </Text >
    <Button 
      style={styles.commonButton} 
      onPress={() => {setIsHungry(false);}}
      disabled={!isHungry}
      title={isHungry ? 'Give me some food!' : 'Am Alive!'} >
    </Button>


  </View>



  );
};

const styles = StyleSheet.create({
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    backgroundColor: "#87cefa",
    width: 100,
    height: 80,
  },
  commonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});


export default lab1;
