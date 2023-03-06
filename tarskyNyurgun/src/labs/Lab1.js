import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

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

const Lab1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 180,
    alignContent: "center",
  },

  title: {
    textAlign: "center",
    color: "blue",
    fontSize: 20,
    marginTop: 50,
    paddingBottom: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  buttons: {
    marginBottom: 30,
  },
});

export { Lab1 };
