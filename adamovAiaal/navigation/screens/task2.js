import { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
} from "react-native";

const Task2 = (navigation) => {
  const [count, setCount] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isActivated, setIsActivated] = useState(false);
  useEffect(() => {
    if (isActivated) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start(() => {
        setIsActivated(false);
      });
    }
  }, [isActivated]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#DBDBDB",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Animated.View style={[{ opacity: fadeAnim }]}>
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
      </Animated.View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setIsActivated(true)}
          style={styles.buttons}
        >
          <Text style={styles.button_text}>Activate FadeIn</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#694D4B",
    borderWidth: 3,
    borderColor: "#E1B1AD",
  },
  button_text: {
    color: "#E1B1AD",
    fontSize: 20,
  },
  count: {
    color: "#694D4B",
    fontSize: 30,
    fontWeight: "800",
  },
});

export default Task2;
