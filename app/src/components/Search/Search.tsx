import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/src/services/Colors'

export default function Search() {
  return (
    <View style={{ padding: 15 }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        backgroundColor: '#dcdde1',
        borderRadius: 15,
        marginTop: 15,

      }}>
        <Ionicons name="search-outline" size={24} color="black" style={{ marginLeft: 10 }} />
        <TextInput placeholder='Search' style={{ flex: 1, padding: 10 }} />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({})