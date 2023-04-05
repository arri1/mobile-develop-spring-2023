import { Image, StyleSheet, View, Text } from "react-native";
import InfoText from "./InfoText";

const CharacterCard = ({ name, status, species, gender, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHalf}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.rightHalf}>
        <View style={styles.infoBlock}>
          <InfoText
            title={"Status"}
            infoText={status}
            color={status == "Alive" ? "#52FF00" : "red"}
          />
          <InfoText title={"Species"} infoText={species} color={"black"} />
          <InfoText title={"Gender"} infoText={gender} color={"black"} />
        </View>
      </View>
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FF834E",
    width: 380,
    height: 300,
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  leftHalf: {
    flex: 1,
  },
  rightHalf: {
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginTop: 10,
    marginLeft: 10,
  },
  nameText: {
    color: "white",
    fontSize: 23,
    marginTop: 20,
    marginLeft: 10,
  },
  infoBlock: {
    alignSelf: "center",
    marginTop: 10,
  },
});
