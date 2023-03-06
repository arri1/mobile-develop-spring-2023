import * as React from "react";
import {
  Modal,
  StyleSheet,
  Button,
  Text,
  Pressable,
  SafeAreaView,
  View,
  Image,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const ClickerScreen = (props) => {
  const [count, setCount] = React.useState(0);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Вы кликнули {count} раз</Text>
      <Button title="Кликать" onPress={onClick} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default ClickerScreen;
