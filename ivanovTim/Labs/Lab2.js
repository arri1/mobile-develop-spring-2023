import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
//import axios from "axios";

const colors = ["black", "grey"];
const diffColors = ["pink", "cyan", "purple"];

const Lab2 = () => {
  const [count, setCount] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [diffColorsIndex, setDiffColorsIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 2000);
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors[backgroundColorIndex],
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ margin: 30 }}>
        <View style={{ alignItems: "baseline" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
            Counter: {count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={{
            
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
          Change color
        </Text>
        <TouchableOpacity
          onPress={() => {
            setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: diffColors[(diffColorsIndex)], fontSize: 20, fontWeight: "800" }}>
            Very useful button
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setDiffColorsIndex((diffColorsIndex + 1) % diffColors.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 50,
            backgroundColor: "white",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lab2;


/*const AxiosExampleScreen = () => {
	const [employers,setEmployers] = useState([])
	const [loading,setLoading] = useState(false)

	const getData = async () =>{
		const {data:{data:{res}}} = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
		console.log(res)
			setEmployers(data);
		};

	useEffect(() => {
		getData()
	}, []);

	return (
		<View>
			refreshControl={
				<RefreshControl refreshing={loading} onRefresh={() => getData()} />
			}
    
			{employers.map(item=>{
				return <View key={item.id}>
					<Text>{item.employee_name}</Text>
				</View>
			})}
	 	</View>
  );
};

export default Lab2;*/
