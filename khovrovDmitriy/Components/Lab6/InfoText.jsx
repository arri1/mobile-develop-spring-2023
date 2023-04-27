import { View, Text, StyleSheet } from "react-native";

const InfoText = ({ title, infoText, color }) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={{ ...styles.infoText, color: color }}>{infoText}</Text>
    </View>
  );
};

export default InfoText;

const styles = StyleSheet.create({
  titleText: {
    color: "#EBEBEB",
    fontSize: 15,
    marginTop: 10,
  },
  infoText: {
    color: "black",
    fontSize: 25,
  },
});
