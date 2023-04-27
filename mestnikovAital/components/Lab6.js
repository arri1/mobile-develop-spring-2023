import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";
const Lab6 = () => {
    const QUERY = gql`
    query {
      characters(page: 1, filter: { name: "Rick" }) {
        results {
          id
          name
        }
      }
    }
  `;

    const { data, loading } = useQuery(QUERY);
    if (loading)
        return (
                <View>
                    <ActivityIndicator />
                </View>
        );
    return (
            <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#1e2140",
                    }}
            >
                <Text style={styles.header}>Версии из Rick$Morty":</Text>
                {data.characters.results.map((item) => (
                        <Text key={item.id} style={styles.text}>
                            {item.name}
                        </Text>
                ))}
            </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: "white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        maxWidth: 350,
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        marginTop: 5,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "white",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        maxWidth: 250,
        fontSize: 14,
    },
});

export default Lab6;