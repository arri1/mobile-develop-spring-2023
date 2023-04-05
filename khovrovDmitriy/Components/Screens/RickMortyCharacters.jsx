import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import CharacterCard from "../Lab6/CharacterCard";

const screenWidth = Dimensions.get("window").width;

const RickMortyCharacters = ()=>
{
    return(
        <View style={styles.containerDark}>
            <ScrollView contentContainerStyle={styles.scrollView}>
            <CharacterCard/>
            </ScrollView>
            
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
    },
    scrollView: {
        width: screenWidth,
        alignItems: "center",
      },
  });