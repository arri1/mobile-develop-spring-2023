import React, {useEffect, useState} from "react"
import { View, Text } from "react-native"
const UseEffect = () => {
    const [b, setB] = useState("boof")
    useEffect(()=>{
        setTimeout(()=>{setB("boooooooof")}, 1000)
    }, [])
    return(
        <View style={{flex:1, backgroundColor: "#E6F2FE"}}>
            <Text>{b}</Text>
        </View>
    )
}
export default UseEffect