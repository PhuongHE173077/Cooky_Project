import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/src/services/Colors'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { fetchCategoryAPIs } from '@/src/apis'


export default function CookBookHeader({ active, setActive }: any) {

  return (
    <View>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 24
        }}
      >Cook Book</Text>

      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', gap: 10 }} >
        <TouchableOpacity onPress={() => setActive(!active)}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
            borderWidth: 0.2,
            borderColor: Colors.GRAY,
            borderRadius: 15,
            padding: 10,
            opacity: active ? 1 : 0.4
          }}>
            <Ionicons name='sparkles' size={24} />
            <Text
              style={{
                fontFamily: 'outfit-bold',
                fontSize: 17
              }}
            >My Recipes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActive(!active)}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
            borderWidth: 0.2,
            borderColor: Colors.GRAY,
            borderRadius: 15,
            padding: 10,
            opacity: active ? 0.4 : 1
          }}>
            <FontAwesome name='bookmark' size={24} />
            <Text
              style={{
                fontFamily: 'outfit-bold',
                fontSize: 17
              }}
            >My Save</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})