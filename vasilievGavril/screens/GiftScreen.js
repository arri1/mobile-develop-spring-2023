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

const GiftScreen = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={() => {
            Alert.alert("Гифка была закрыта");
            setOpen(!open);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.modalText}
                source={require("../assets/hungry.gif")}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setOpen(!open)}
              >
                <Text style={styles.textStyle}>Закрыть гифку</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setOpen(true)}
        >
          <Text style={styles.textStyle}>Показать гифку</Text>
        </Pressable>
      </View>
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
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    margin: 25,
    textAlign: "center",
  },
});
export default GiftScreen;
