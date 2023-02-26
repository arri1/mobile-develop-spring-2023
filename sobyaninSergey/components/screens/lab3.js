import { useState, useMemo } from "react";
import { Button, Text, View } from "react-native";
import axios from "axios";

const Lab3 = () => {
  const [advice, setAdvice] = useState("click that button!");

  //   const getRandomId = useMemo(
  //     (min, max) => {
  //       min = Math.ceil(min);
  //       max = Math.floor(max);
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //     }
  //     //  [advice]
  //   );

  //   const getAdvice = () => {
  //     axios
  //       .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200).toString())
  //       .then((response) => {
  //         setAdvice(response.data.slip.advice);
  //       });
  //   };

  const getAdvice = useMemo(() => {
    axios
      .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200).toString())
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
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
    </View>
  );
};

export default Lab3;
