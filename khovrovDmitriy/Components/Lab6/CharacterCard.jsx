import { Image, StyleSheet, View, Text } from "react-native";

const CharacterCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHalf}>
        <Image
          style={styles.image}
          source={{
            uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          }}
        />
        <Text style={styles.nameText}>Rick Sanchez</Text>
      </View>
      <View style={styles.rightHalf}>
          <View style={styles.infoBlock}>
            <Text style={styles.titleText}>Status</Text>
            <Text style={{...styles.infoText,color:'#52FF00'}}>Alive</Text>
            <Text style={styles.titleText}>Species</Text>
            <Text style={{...styles.infoText}}>Human</Text>
            <Text style={styles.titleText}>Gender</Text>
            <Text style={{...styles.infoText}}>Male</Text>
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
    marginTop: 20,
    flexDirection: "row",
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
    marginTop:10,
    marginLeft:10
  },
  nameText:{
    color:'white',
    fontSize:25,
    alignSelf:'center',
    marginTop:20,
  },
  infoBlock:{
    alignSelf:'center',
    marginTop:10
  },
  titleText:{
    color:'#D2D2D2',
    fontSize:15,
    marginTop:10
  },
  infoText:{
    color:'black',
    fontSize:25
  }
});
