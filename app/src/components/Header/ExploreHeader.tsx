import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecipeCard from '../Card/RecipeCard'
import { fetchRecipeAPIs } from '@/src/apis'

export default function ExploreHeader() {

  const [recipe, setRecipe] = React.useState<any[]>([])

  React.useEffect(() => {
    fetchRecipeAPIs()
      .then(res => {
        if (!Array.isArray(res)) return
        setRecipe(res)
      })
  }, [])
  return (
    <View
      style={{
        padding: 20
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 24,
        }}
      >Explore</Text>

      <FlatList
        style={{ marginTop: 10 }}
        data={recipe}
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