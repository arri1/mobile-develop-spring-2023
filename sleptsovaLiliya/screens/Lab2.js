import { Text, View, SafeAreaView, Image, Button} from 'react-native'
import {useState, useEffect, useRef} from 'react'
import {styles} from '../compot/StylesLab2'

const Lab2 = () => {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    )

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
    
    return(
        <SafeAreaView >
        <View style={styles.main}>
        <View style={styles.header}>
          <View style={{width:"50%"}}>
            <Text style={styles.text}>Lab Two</Text>
          </View>
          <View style={{width:"50%",alignItems:"flex-end"}}>
            <Image source={require('../assets/at.png')}
            style={{left:-50,height:295,width:310}}/>
          </View>
        </View>
        <Text style={{ fontSize: 100 }}>{count}</Text>
        <Button
          title="Stop"
          onPress={() => {
            clearInterval(intervalRef.current)
        }}/>
        </View>
        </SafeAreaView>
    )
}

export default Lab2;