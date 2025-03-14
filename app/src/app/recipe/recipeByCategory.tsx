import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function recipeByCategory() {
  const { categoryName } = useLocalSearchParams()

  return (
    <View style={{ padding: 20 }}>
      <Text>{categoryName}</Text>
    </View>
  )
}