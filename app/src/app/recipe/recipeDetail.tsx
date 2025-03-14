import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import RecipeIntro from '@/src/components/Recipe/RecipeIntro'
import { Colors } from '@/src/services/Colors'
import Ingredient from '@/src/components/Recipe/Ingredient'
import RecipeStep from '@/src/components/Recipe/RecipeStep'

export default function recipeDetail() {
  const { recipe } = useLocalSearchParams()

  const currentRecipe = JSON.parse(recipe as string)


  return (

    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{ padding: 20, height: '100%', backgroundColor: Colors.WHITE }}>
          <RecipeIntro recipe={currentRecipe} />
          <Ingredient recipe={currentRecipe} />
          <RecipeStep steps={currentRecipe.steps} />
        </View>

      } />

  )
}