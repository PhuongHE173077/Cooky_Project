import { Marquee } from '@animatereactnative/marquee'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Colors } from '../services/Colors'

export default function Landing() {
  const imageList = [
    require('../assets/images/1.jpg'),
    require('../assets/images/c1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/c2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/c3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/6.jpg'),
    require('../assets/images/5.jpg')
  ]

  const router = useRouter()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Marquee spacing={10} speed={0.7} style={{ transform: [{ rotate: '-4deg' }] }}>
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <Marquee spacing={10} speed={0.7} style={{ transform: [{ rotate: '-4deg' }], marginTop: 10 }}>
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <Marquee spacing={10} speed={0.7} style={{ transform: [{ rotate: '-4deg' }], marginTop: 10 }}>
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <View style={styles.content}>
          <Text style={styles.title}>Cook mate AI | Find, Create & Enjoy Delicious Recipes</Text>
          <Text style={styles.subtitle}>Generate delicious recipes in seconds with the power of AI</Text>

          <TouchableOpacity style={styles.button} onPress={() => { router.push('/auth/Login') }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 10
  },
  content: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 17,
    color: Colors.GRAY,
    marginTop: 10
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 17,
    fontFamily: 'outfit'
  }
})
