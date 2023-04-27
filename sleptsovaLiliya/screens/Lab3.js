import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import {useState,useMemo, useEffect} from 'react'
import {styles} from '../compot/Styles'

const Lab2 = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    //const result = useMemo(() => { return Sum(4 * count + count2);},[count]) 
    //const result = Sum(4 * count + count2);

    return(
        <SafeAreaView >
        <View style={styles.main2}>
            <View style={{
                top:250,
                fontSize: 30
            }}>
        <Text style={{
                top:200,
                fontSize: 30
            }}>Количество: {count}</Text>
        <Text style={{
                top:200,
                fontSize: 30
            }}>+100: {count2}</Text>
             <View style={styles.container}>
        <TouchableOpacity style={styles.button2}
            onPress={() => {
              setCount(count-1)
            }}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}
            onPress={() => {
              setCount(count+1)
            }}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}
            onPress={() => {
              setCount2(count2+100)
            }}
          >
            <Text style={styles.buttonText}>+100</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        </SafeAreaView>
    )
}

function Sum(num) {
    console.log("Sum(num);",num);
    let i=0;
    if(num<=0){
        return 0;
    } else {
        while(i < 20000000) i++;
    }
    return num;
}

export default Lab2;