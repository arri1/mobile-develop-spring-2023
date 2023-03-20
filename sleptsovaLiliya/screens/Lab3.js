import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useState,useMemo } from 'react'
import { styles } from '../compot/StylesLab3'

const Lab3 = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const result = useMemo(() => { return Sum(4 * count + count2);},[count]) 
    //const result = Sum(4 * count + count2);

    return(
        <SafeAreaView >
        <View style={styles.main}>
        <View style={styles.header}>
          <View style={{width:"50%"}}>
            <Text style={styles.text}>Lab Three</Text>
          </View>
        </View>
        <ScrollView horizontal>
        <Image source={require('../assets/1.png')} style={{top:30,height:110,width:110}}/>
        <Image source={require('../assets/2.png')} style={{top:30,height:110,width:110}}/>
        <Image source={require('../assets/3.png')} style={{top:30,height:110,width:110}}/>
        <Image source={require('../assets/4.png')} style={{top:30,height:110,width:110}}/>
        <Image source={require('../assets/5.png')} style={{top:30,height:110,width:110}}/>
        </ScrollView>

        <Text style={[{top:-110},styles.buttonText]}>
        Количество: {count}{"\n"} +100: {count2}
        </Text>

        <View style={styles.container}>
        <TouchableOpacity style={styles.button}
            onPress={() => {setCount(count-1)}}
            >
            <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}
            onPress={() => {setCount(count+1)}}
            >
            <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => {setCount2(count2+100)}}
          >
            <Text style={styles.buttonText}>+100</Text>
        </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
  )}

  function Sum(num) {
    console.log("Sum(num);",num);
    let i=0;
    if(num<=0){return 0;} 
    else {while(i < 20000000) i++;}
    return num;
}

export default Lab3;