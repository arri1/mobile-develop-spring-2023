import { Text, View, Button } from 'react-native'
import {useState,useEffect} from 'react'

const Lab2 = () => {
    const [number,setNumber] = useState(0)

    useEffect(() => {
        if(number > 20){
            console.warn("hehe",number)
        }
    })
    return(
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:70}}>{number}</Text>
            <View>
                <Button title="click" onPress={()=>setNumber(number+1)}/>
            </View>
            
        </View>
    )
}

export default Lab2;