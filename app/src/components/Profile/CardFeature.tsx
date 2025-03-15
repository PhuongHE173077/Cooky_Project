import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  Ionicons,
} from '@expo/vector-icons'

export default function CardFeature({ name, IconName, onPress, iconLibrary }: any) {
  return (
    <TouchableOpacity
      style={{
        padding: 20,
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        borderColor: '#E2E2E2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      onPress={() => onPress()}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        {React.createElement(iconLibrary, { name: IconName, size: 24, color: 'black' })}
        <Text style={{ fontFamily: 'semibold', fontSize: 18, fontWeight: 540 }}>{name}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
