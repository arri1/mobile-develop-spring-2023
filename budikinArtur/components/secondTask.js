import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const SecondScreen = () => {
  const [counter, setCounter] = useState(0);
  const [check, setChek] = useState(0);
  const [word, setWord] = useState("");
  const number = 50;
  useEffect(() => {
    if (counter > number) {
      setWord("Число меньше");
    } else if (counter < number) {
      setWord("Число больше");
    } else setWord("Вы угадали");
  }, [check]);
  const [fontLoaded] = useFonts({
    Monts: require("../assets/fonts/Montserrat-Medium.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.main}>
      <Text style={styles.number}>{counter}</Text>
      <Text style={styles.text}>{word}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (counter != 100) {
              setCounter(counter + 10);
            }
          }}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text style={styles.commonText}>Очистить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (counter != 0) {
              setCounter(counter - 10);
            }
          }}
        >
          <Text style={styles.commonText}>-10</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => {
          setChek(check + 1);
        }}
      >
        <Text style={styles.commonText}>Проверить</Text>
      </TouchableOpacity>
    </View>
  );
};
const random = () => {
  return Math.floor(Math.floor(Math.random() * 100) / 10) * 10;
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#606C38",
    alignItems: "center",
    flex: 1,
  },
  buttonGroup: {
    marginTop: 28,
    flexDirection: "row",
    gap: 18,
  },

  checkButton: {
    marginTop: 14,
    width: 118,
    height: 43,
    backgroundColor: "#283618",
    justifyContent: "center",
    borderRadius: 4,
  },

  number: {
    fontFamily: "Monts",
    marginTop: 113,
    fontSize: 50,
    fontweight: 500,
    fontsize: 45,
    lineHeight: 53,
    color: "#FEFAE0",
  },

  text: {
    fontFamily: "Monts",
    marginTop: 28,
    fontStyle: "normal",
    fontSize: 25,
    lineheight: 29,
    color: "#FEFAE0",
  },

  commonButton: {
    justifyContent: "center",
    borderRadius: 4,
    width: 80,
    height: 43,
    backgroundColor: "#283618",
  },
  commonText: {
    fontFamily: "Monts",
    fontStyle: "normal",
    fontweight: 500,
    fontSize: 14,
    lineheight: 16,
    textAlign: "center",
    color: "#FEFAE0",
  },
});

export default SecondScreen;
