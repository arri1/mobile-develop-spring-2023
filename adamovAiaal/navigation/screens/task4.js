import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  decrement,
  increment,
  selectCount,
  incrementByAmount,
  decrementByAmount,
} from "../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Task4 = (navigation) => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("5");
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#DBDBDB",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: "800", color: "#694D4B" }}>
          {count}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.inputs}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={styles.buttons}
        >
          <Text style={styles.button_text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={styles.buttons}
        >
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => dispatch(incrementByAmount(Number(amount) || 0))}
          style={styles.button}
        >
          <Text style={styles.button_text}>+Amount</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(decrementByAmount(Number(amount) || 0))}
          style={styles.button}
        >
          <Text style={styles.button_text}>-Amount</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Task4;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderRadius: 10,
    minWidth: "40%",
    minHeight: 45,
    alignItems: "center",
    backgroundColor: "#694D4B",
    borderWidth: 3,
    borderColor: "#E1B1AD",
    paddingVertical: 5,
  },
  buttons: {
    paddingVertical: 8,
    marginHorizontal: 8,
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
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 5,
    padding: 7,
    minWidth: 170,
    color: "#694D4B",
    borderColor: "#694D4B",
    backgroundColor: "#E1B1AD",
  },
});
