import { useState, useMemo } from "react";
import { Button, Text, View } from "react-native";
import axios from "axios";

const Lab3 = () => {
  const colors = ["red", "white", "blue", "orange", "darkgreen"];
  const [advice, setAdvice] = useState("click that button!");
  const [backgroundColor, setBackgroundColor] = useState(0);

  const getRandomId = useMemo(() => {
    return Math.floor(Math.random() * 200) + 1;
  }, [advice]);

  const getAdvice = () => {
    axios
      .get("http://api.adviceslip.com/advice/" + getRandomId.toString())
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors[backgroundColor],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Get Advice" onPress={getAdvice} color="green" />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        advice:
        {advice}
      </Text>
      <View
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Button
          title="Change Color"
          onPress={() => {
            setBackgroundColor((backgroundColor + 1) % colors.length);
          }}
          color="green"
        />
      </View>
    </View>
  );
};

export default Lab3;
