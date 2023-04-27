import React, { useMemo, useState } from 'react'
import { View, Text, TouchableOpacity,ImageBackground } from 'react-native'
import { styles } from '../styles/StylesLab3'

const Memo = () => {
  const [count, setCount] = useState(0)

  const ff = useMemo(() => {
    let result = 0
    for (let i = 0; i < 100000000; i++) {
      result += i
    }
    return result
  }, [])

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Count: {count}{'\n'} ff: {ff}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttontext}>memo</Text>
      </TouchableOpacity>
    </View>
  )
}

const Nomemo = () => {
  const [count, setCount] = useState(0)

  const ff = () => {
    let result = 0
    for (let i = 0; i < 100000000; i++) {
      result += i
    }
    return result
  }

  return (
    <View style={styles.main2}>
      <Text style={styles.text2}>Count: {count} {'\n'} ff: {ff()}</Text>
      <TouchableOpacity style={styles.button2} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttontext}>nomemo</Text>
      </TouchableOpacity>
    </View>
  )
}

const Lab3 = () => {
  const image = require('../assets/10.jpg')
  return (
    <>
      <ImageBackground style={{flex:1}} source={image}>
        <View style={styles.header}/>
        <Text style={styles.text3}>Lab Three</Text>
        <Memo />
        <Nomemo />
      </ImageBackground>
    </>
  )
}

export default Lab3;