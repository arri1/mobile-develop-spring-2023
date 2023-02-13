import {
  Alert,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosExampleScreen = () => {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      const {
        data: { data },
      } = res;
      setEmployers(data);
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
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => getData()} />
      }
    >
      {employers.map(item=>{
        return <View key={item.id}>
          <Text>{item.employee_name}</Text>
        </View>
      })}
    </ScrollView>
  );
};

export default AxiosExampleScreen;
