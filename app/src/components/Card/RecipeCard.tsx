import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/services/Colors';
import { useRouter } from 'expo-router';

export default function RecipeCard({ recipe }: any) {
  const router = useRouter()

  return (
    <TouchableOpacity style={{ margin: 5 }}
      onPress={() => router.push({
        pathname: '/recipe/recipeDetail',
        params: { recipe: JSON.stringify(recipe) }
      })}>
      <Image source={{ uri: recipe?.imagePrompt }}
        style={{
          height: 220,
          width: '100%',
          borderRadius: 20
        }}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)', 'transparent']}
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >

        <View >
          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 16,
              color: Colors.WHITE
            }}

          >{recipe?.recipeName}</Text>
        </View>
      </LinearGradient>


    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

});