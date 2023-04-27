import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Text, View, Button, FlatList, StyleSheet, Image } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

type CarProps = {
  upgrade: string,
};

const Car = (props: CarProps) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.buttons}>
      <Text>
        {props.upgrade} Level: {count}
      </Text>
      <Button
        onPress={() => setCount(count + 1)}
        disabled={count >= 10}
        title={count < 10 ? "Click to upgrade" : "Max Level"}
      />
    </View>
  );
};

const Lab3 = ({ navigation }) => {
  const [facts, setFacts] = useState([]);
  const randomFacts = useCallback(async () => {
    for (let i = 0; i < 10000000; i++) {}
    axios
      .get(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
      )
      .then((responce) => {
        console.log(responce.data);
        setFacts(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const randomFacts2 = () => {
    for (let i = 0; i < 10000000; i++) {}
    axios
      .get(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=400"
      )
      .then((responce) => {
        console.log(responce.data);
        setFacts(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    randomFacts2();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://static.tvtropes.org/pmwiki/pub/images/pimp_my_ride.png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Крутая тачка</Text>
      <Car upgrade="Engine" />
      <Car upgrade="Suspention" />
      <Car upgrade="Wheels" />
      <Car upgrade="Bodywork" />

      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Random stuff
      </Text>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 50,
    alignContent: "center",
  },

  title: {
    textAlign: "center",
    color: "#FF0000",
    fontSize: 20,
    marginTop: 10,
    paddingBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  buttons: {
    marginBottom: 10,
  },

  list: {
    marginTop: 10,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 15,
  },
});

export { Lab3 };
