import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const ThirdTask = () => {
  const [number, setnumber] = useState(0);
  const [number2, setnumber2] = useState(0);
  useMemo(() => expensiveSum(number2), [number2]);
  const [fontLoaded] = useFonts({
    "Monts": require("../assets/fonts/Montserrat-Medium.ttf"),
  });
useEffect(()=>{
  async function prepare(){
    await SplashScreen.preventAutoHideAsync();
  }
  prepare();
},[]);
  if (!fontLoaded) {
    return undefined;
  }else{
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.main}>
      <View style={styles.numberGroup}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.number}>{number2}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setnumber(number + 10);
          }}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setnumber2(number2 + 10);
          }}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#606C38",
    alignItems:"center",
    flex:1,
  },

  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap:82,
  },

  numberGroup:{
    flexDirection:"row",
    gap:131,
    marginTop:111,
  },

  number: {
    fontFamily:"Monts",
    fontSize: 50,
    textAlign: "center",
    fontweight: 500,
    fontsize: 45,
    lineHeight: 53,
    color: "#FEFAE0",
  },

  text: {
    fontFamily:"Monts",
    fontSize: 25,
    textAlign: "center",
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  commonButton: {
    marginTop:97,
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "black",
    width: 80,
    height: 43,
    backgroundColor: "#283618",
  },
  commonText: {
    fontFamily:"Monts",
    fontStyle: "normal",
    fontweight: 500,
    fontsize: 14,
    lineheight: 16,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    color: "#FEFAE0",
  },
});
const expensiveSum = (n) => {
  for (i = 0; i < 10000000; i++) {
    n++;
  }
  return;
};
export default ThirdTask;
