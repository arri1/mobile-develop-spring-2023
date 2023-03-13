import { useState, useMemo, useCallback } from "react";
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
  const colors = ["red", "white", "blue", "orange", "darkgreen"];
  const [advice, setAdvice] = useState("click that button!");
  const [backgroundColor, setBackgroundColor] = useState(0);
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

  const getAdvice = useMemo(() => {
    axios
      .get("http://api.adviceslip.com/advice/" + getRandomId().toString())
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  }, [backgroundColor]);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors[backgroundColor],
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
            getAdvice;
            setBackgroundColor((backgroundColor + 1) % colors.length);
          }}
          color="green"
        >
          <Text style={styles.buttonsText}>CHANGE COLOR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          title="Get Advice"
          onPress={getAdvice}
          color="green"
        >
          <Text style={styles.buttonsText}>GET ADVICE</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "black",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 250,
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
    backgroundColor: "#007FFF",
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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default Lab3;
