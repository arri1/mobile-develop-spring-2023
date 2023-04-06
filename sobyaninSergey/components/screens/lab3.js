import { useState, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Lab3 = () => {
  const [advice, setAdvice] = useState("click that button!");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const getRandomId = () => {
    return Math.floor(Math.random() * 200) + 1;
  };

  const getAdvice = () => {
    axios
      .get("http://api.adviceslip.com/advice/" + getRandomId().toString())
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  };

  const expensiveFunc = () => {
    for (let i = 0; i < 1000000000; i++) {}
  };

  const withMemo = useCallback(() => {
    expensiveFunc();
  }, []);

  const withoutMemo = () => {
    expensiveFunc();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#1e2140",
        alignItems: "center",
        justifyContent: "center",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginHorizontal: 20,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={styles.buttons}
          title="Change Color"
          onPress={() => {
            withMemo();
            getAdvice();
          }}
          color="green"
        >
          <Text style={styles.buttonsText}>with memo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          title="Get Advice"
          onPress={() => {
            withoutMemo();
            getAdvice();
          }}
          color="green"
        >
          <Text style={styles.buttonsText}>without memo</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 250,
          fontSize: 16,
        }}
      >
        advice:
        {advice}
      </Text>
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    backgroundColor: "#556097",
    borderRadius: 100,
    marginTop: 10,
  },
  buttonsText: {
    fontWeight: "bold",
    color: "white",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 250,
    fontSize: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e2140",
  },
});

export default Lab3;
