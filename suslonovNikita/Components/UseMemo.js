import React, {useMemo, useState} from "react"
import { TouchableOpacity } from "react-native"
import { View, Text, StyleSheet } from "react-native"
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
        <View style={{flex:1, backgroundColor: "#E6F2FE", justifyContent:"center", alignItems: "center", gap:30}}>
            <View style={{gap:5, alignItems:"center"}}>
                <Text style={{fontSize: 20}}>{c} without Memo</Text>
                <TouchableOpacity onPress={()=>setC(c+1)} style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setC(c-1)} style={styles.button}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>   
            <View style={{gap:5, alignItems:"center"}}>
                <Text style={{fontSize: 20}}>{s}</Text>
                <TouchableOpacity onPress={()=>setS(s+1)} style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setS(s-1)} style={styles.button}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
export default UseMemo

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3B82F6", 
        width: 156, 
        height: 35, 
        borderRadius: 20, 
        justifyContent: "center", 
        alignItems: "center"
    },
})