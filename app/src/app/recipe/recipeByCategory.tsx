import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function recipeByCategory() {
  const { categoryName } = useLocalSearchParams()



  return (
    <View style={{
      padding: 20,
      paddingTop: 55,
      height: '100%'
    }}>
      <Text>{categoryName}</Text>
    </View>
  )
}