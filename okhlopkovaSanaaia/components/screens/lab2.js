import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Alert,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

const Lab2 = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.hh.ru/vacancies?area=80&professional_role=96"
      );
      const {
        data: { items },
      } = res;
      setVacancies(items);
    } catch (e) {
      Alert.alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => getData()} />
        }
      >
        {vacancies.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>{item.employer.name}</Text>
              <Text style={styles.text}>{item.snippet.requirement}</Text>
            </View>
          );
        })}
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
  item: {
    padding: 10,
    backgroundColor: "#ffffff",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1785e5",
  },
  text: {
    marginTop: 8,
  },
});

export default Lab2;
