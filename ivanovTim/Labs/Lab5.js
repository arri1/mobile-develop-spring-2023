import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_LIST = gql`
  query {
    countries {
      name
      code
    }
  }
`;

const Lab5 = () => {
  const { data, loading } = useQuery(GET_LIST);

  console.log(data);

  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <ScrollView>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.text}>
          List of countries: {data.countries.length}
        </Text>
        {data.countries.map((item) => (
          <Text key={item.code} style={styles.textCountries}>
            {item.name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "800",
  },
  textCountries: {
    color: "black",
    fontSize: 14,
  },
});

export default Lab5;
