import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_PEOPLE = gql`
  query {
    allPeople {
      people {
        id
        name
        gender
        birthYear
        homeworld {
          name
        }
        height
      }
    }
  }
`;

const Lab6 = () => {
  const { data, loading } = useQuery(GET_ALL_PEOPLE);
  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemsContainer}>
          {data.allPeople.people.map((item) => {
            return (
              <View key={item.id} style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>Birth year: {item.birthYear}</Text>
                <Text style={styles.text}>Gender: {item.gender}</Text>
                <Text style={styles.text}>
                  Home world: {item.homeworld.name}
                </Text>
                <Text style={styles.text}>Height: {item.height} cm</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 10,
    backgroundColor: "#ffffff",
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    width: "45%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1785e5",
    textAlign: "center",
  },
  text: {
    marginTop: 8,
  },
});

export default Lab6;
