import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorRandom } from '@/src/constants/ColorRandom';





export default function CategoryCard() {

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * ColorRandom.length);
    return ColorRandom[randomIndex];
  };

  return (
    <View style={{ padding: 20, paddingLeft: 7, marginLeft: 20 }}>
      <View style={{
        width: 248.19,
        height: 105,
        backgroundColor: getRandomColor() + '80',
        borderRadius: 25,
        justifyContent: 'center',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginLeft: 20 }}>
          <Image source={require('../../assets/images/rice.png')} style={{ width: 71.9, height: 71.9, borderRadius: 99 }} />
          <Text
            style={{
              fontFamily: 'semibold',
              fontSize: 20,
            }}
          >
            Pluses
          </Text>
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({})