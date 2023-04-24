import { Alert, Image, StyleSheet, View } from "react-native";

const passiveStarUri = "../Images/star1.png";
const activeStarUri = "../Images/star2.png";

const Star = ({ star, TouchStar }) => {
  const TouchEvent = () => {
    TouchStar(star.id);
  };
  return (
    <View style={styles.container} onTouchEnd={TouchEvent}>
      <Image
        style={styles.image}
        source={star.active ? require(activeStarUri) : require(passiveStarUri)}
      ></Image>
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
