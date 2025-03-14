import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'

export default function Ingredient({ recipe }: any) {
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 17
          }}
        >Ingredient</Text>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 14
          }}
        >{recipe?.ingredients.length} items</Text>
      </View>

      <FlatList
        data={recipe?.ingredients}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item, index }: any) => (
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
          }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  backgroundColor: Colors.SECONDARY,
                  borderRadius: 99
                }}
              >{item.icon}</Text>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'outfit',
                  marginLeft: 10
                }}
              >{item?.ingredient}</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'outfit',
                  flex: 1
                }}
              >{item?.quantity.substring(0, 20)}</Text>
            </View>
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({})