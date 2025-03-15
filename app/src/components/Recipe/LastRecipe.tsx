import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchRecipeAPIs } from '@/src/apis'
import RecipeCard from '../Card/RecipeCard'
import RecipeCardHome from '../Card/RecipeCardHome'

export default function LastRecipe() {
  const [recipes, setRecipes] = useState<any[]>([])

  useEffect(() => {
    fetchRecipeAPIs()
      .then(res => {
        if (!Array.isArray(res)) return
        setRecipes(res)
      })
  }, [])

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.heading}>Latest Recipes</Text>

      <FlatList
        data={recipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginTop: 15 }}>
            <RecipeCardHome recipe={item} />
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
  },
  categoryContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
})