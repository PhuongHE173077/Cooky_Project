import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/src/services/Colors'

export default function Search() {
  return (

    <View style={{ width: '90%' }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: Colors.WHITE,
        backgroundColor: '#F2F3F2',
        borderRadius: 15,
        marginTop: 15,
        padding: 5

      }}>
        <Ionicons name="search-outline" size={24} color="black" style={{ marginLeft: 10 }} />
        <TextInput placeholder='Search' style={{ flex: 1, padding: 10 }} placeholderTextColor={Colors.GRAY} />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({})