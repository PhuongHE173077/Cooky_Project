import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecipeCard from '../Card/RecipeCard'

export default function CookBookContent({ repecies }: any) {
  return (
    <View>
      <FlatList
        style={{ marginTop: 10 }}
        data={repecies}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <RecipeCard recipe={item} />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})