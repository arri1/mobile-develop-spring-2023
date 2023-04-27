import { ActivityIndicator, Text, View, Image, ScrollView } from "react-native";
import {
  useQuery,
  gql,
} from "@apollo/client";


const Lab6 = () => {
  const query = gql`
    query {
      characters(page: 1, filter: { name: "s" }) {
        results {
          id
          name
          species
          gender
          image
          status
          origin {
            name
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(query);
  console.log(data);
  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );

    return (
      <ScrollView style={{
        alignContent: "center",
        paddingLeft: 20
      }}>
        {data.characters.results.map((item) => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 20, padding: 10, marginTop: 20, fontWeight: 'bold' }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, padding: 10 }}>
              Info: {item.species}, {item.gender}, {item.status}, {item.origin.name}
            </Text>
            <Image
              style={{
                width: 350,
                height: 350,
                resizeMode: 'contain',
              }}
              source={{
                uri: item.image
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
};

export default Lab6;