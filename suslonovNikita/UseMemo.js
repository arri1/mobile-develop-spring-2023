import React, {useMemo, useState} from "react"
import { View, Text, Button } from "react-native"
const UseMemo = () => {
    const [s, setS] = useState(0)
    const [c, setC] = useState(0)
    useMemo(() => {
        console.log('useMemo', s)
        let i = 10000000
        console.log(i)
        while(i >= 0) {
            i-=1
        }
        console.log(i)
    }, [s])
    return(
        <View>
            <Text>{c} without Memo</Text>
            <Button title='+' onPress={() => setC(c+1)}/>
            <Button title='-' onPress={() => setC(c-1)}/>
            <Text>{s}</Text>
            <Button title="+" onPress={()=>setS(s+1)}/>
            <Button title="-" onPress={()=>setS(s-1)}/>
        </View>
    )
}
export default UseMemo