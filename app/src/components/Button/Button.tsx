import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Button({ lable, onPress, icon = '', loading }: { lable: string, onPress: () => void, icon: string, loading: boolean }) {

  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        marginTop: 10,
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center'
      }} onPress={onPress}>
      {loading ? <ActivityIndicator color={Colors.WHITE} /> :
        <Ionicons name={icon} size={20} color={Colors.WHITE} />

      }
      <Text
        style={{
          textAlign: 'center',
          color: Colors.WHITE,
          fontSize: 17,
          fontFamily: 'outfit'
        }}
      >{lable}</Text>
    </TouchableOpacity>
  )
}