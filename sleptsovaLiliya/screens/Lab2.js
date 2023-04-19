import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import {styles} from '../styles/StylesLab2'

const Lab2 = () => {
  const [randomImage, setRandomImage] = useState('https://picsum.photos/300/300')

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('https://picsum.photos/300/300')
      setRandomImage(response.url)
    };
    fetchImage()
  }, [])

  const getRandomImage = async () => {
    const response = await fetch('https://picsum.photos/300/300')
    setRandomImage(response.url)
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={{width:"100%"}}>
          <Text style={styles.text}>Lab Two</Text>
        </View>
      </View>

      {randomImage && <Image source={{ uri: randomImage }} style={styles.image} />}
      
      <TouchableOpacity style={styles.button} onPress={getRandomImage}>
        <Text style={styles.buttontext}>Generate Random Image</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Lab2;