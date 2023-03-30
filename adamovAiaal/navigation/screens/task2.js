import { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
} from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const Task2 = (navigation) => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <FadeInView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 15 }}>
          <TouchableOpacity
            onPress={() => {
              setCount(count - 1);
            }}
            style={styles.buttons}
          >
            <Text style={styles.button_text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}
            style={styles.buttons}
          >
            <Text style={styles.button_text}>+</Text>
          </TouchableOpacity>
        </View>
      </FadeInView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    paddingVertical: 8,
    marginHorizontal: 2,
    borderRadius: 10,
    width: 178,
    alignItems: "center",
    backgroundColor: "black",
  },
  button_text: {
    color: "white",
    fontSize: 20,
  },
  count: {
    fontSize: 30,
    fontWeight: "800",
  },
});

export default Task2;
