import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CharacterCard from "../Lab6/CharacterCard";
import { gql, useQuery } from "@apollo/client";

const screenWidth = Dimensions.get("window").width;

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        name
        status
        species
        gender
        image
      }
    }
  }
`;
const RickMortyCharacters = () => {
  const { data, loading } = useQuery(GET_CHARACTERS);

  return (
    <View style={styles.containerDark}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {loading && <Text>..Loading</Text>}
        {!loading &&
          data.characters.results.map(
            ({ name, status, species, gender, image }) => (
              <CharacterCard
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
              />
            )
          )}
      </ScrollView>
    </View>
  );
};

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
