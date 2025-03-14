import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Colors } from '@/src/services/Colors'

export default function RecipeStep({ steps }: any) {
  return (
    <View
      style={{
        marginTop: 15
      }}
    >
      <Text>Recipe Steps</Text>

      <FlatList
        data={steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: any) => (
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              padding: 10,
              borderColor: Colors.GRAY,
              borderWidth: 0.2,
              borderRadius: 15
            }}>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, backgroundColor: Colors.SECONDARY, padding: 10, borderRadius: 15 }}>{index + 1}.</Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, flex: 1 }}>{item}</Text>
          </View>
        )} />
    </View>
  )
}

const styles = StyleSheet.create({})