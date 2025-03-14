import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { fetchRecipeByCategoryAPIs } from '@/src/apis'
import { Colors } from '@/src/services/Colors'
import RecipeCard from '@/src/components/Card/RecipeCard'

export default function recipeByCategory() {
  const { categoryId, categoryName } = useLocalSearchParams()

  const [recipe, setRecipe] = useState<any[]>([])
  console.log("🚀 ~ recipeByCategory ~ recipe:", recipe)

  useEffect(() => {
    if (!categoryId) return
    fetchRecipeByCategoryAPIs(categoryId)
      .then((res) => {
        if (Array.isArray(res)) setRecipe(res)
      })

  }, [])



  return (
    <View style={{
      padding: 20,
      paddingTop: 55,
      height: '100%',
      backgroundColor: Colors.WHITE
    }}>
      <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 20
        }}> Recipe Category:</Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: 'outfit-bold',
            fontSize: 20
          }}
        >
          {categoryName}
        </Text>
      </View>
      <FlatList
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