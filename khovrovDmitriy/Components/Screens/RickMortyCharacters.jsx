import { Image, ImageBackground, StyleSheet, View } from "react-native";
import CharacterCard from "../Lab6/CharacterCard";


const RickMortyCharacters = ()=>
{
    return(
        <View style={styles.containerDark}>
            <CharacterCard/>
        </View>
    );

}

export default RickMortyCharacters;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    containerDark: {
      flex: 1,
      backgroundColor: "white",
    }
  });