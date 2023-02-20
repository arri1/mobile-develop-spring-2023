import { Text, View } from "react-native";
import {useEffect} from "react";
import axios from "axios";

const AxiosExampleScreen = () => {
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

export default Lab2;
