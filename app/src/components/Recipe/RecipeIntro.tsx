import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function RecipeIntro({ recipe }: any) {
  return (
    <View>
      <Image source={{ uri: recipe.imagePrompt.replace('ai-guru-lab-images/', 'ai-guru-lab-images%2F') }}
        style={{ width: '100%', height: 240, borderRadius: 20 }} />

      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 20,
          marginTop: 7
        }}
      >{recipe?.recipeName}</Text>

      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 17,
          marginTop: 7
        }}
      >Decption</Text>
      <Text
        style={{
          fontFamily: 'outfit',
          color: Colors.GRAY,
          fontSize: 17,
          marginTop: 3
        }}
      >{recipe?.description}</Text>

      <View style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 20
      }}>
        <View
          style={styles.featuraContainer}
        >
          <Ionicons name='leaf' size={24} color={Colors.PRIMARY} />
          <View >
            <Text
              style={styles.mainText}
            >{recipe?.calories} Cal</Text>
            <Text
              style={{
                fontFamily: 'outfit',
                color: Colors.GRAY
              }}
            >Calo</Text>
          </View>
        </View>
        <View
          style={styles.featuraContainer}
        >
          <Ionicons name='timer' size={24} color={Colors.PRIMARY} />
          <View >
            <Text
              style={styles.mainText}
            >{recipe?.cookTime} ms</Text>
            <Text
              style={{
                fontFamily: 'outfit',
                color: Colors.GRAY
              }}
            >Cook Time</Text>
          </View>
        </View>
        <View
          style={styles.featuraContainer}
        >
          <Ionicons name='people' size={24} color={Colors.PRIMARY} />
          <View >
            <Text
              style={styles.mainText}
            >{recipe?.serveTo} hm</Text>
            <Text
              style={{
                fontFamily: 'outfit',
                color: Colors.GRAY
              }}
            >Serve to</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  featuraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 15,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 15
  },
  mainText: {
    fontFamily: 'outfit',
    fontSize: 17,
    color: Colors.PRIMARY
  }
})