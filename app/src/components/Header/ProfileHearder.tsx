import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { USER_IMAGE_DEFAULT } from '@/src/services/Constant'
import { Colors } from '@/src/services/Colors'

export default function ProfileHearder() {

  const currentUser = useSelector((state: any) => state.auth.user)

  return (
    <View style={{
      height: 150,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20
    }}>
      <Image source={{ uri: currentUser.avatar ? currentUser.avatar : USER_IMAGE_DEFAULT }} style={{ width: 50, height: 50, borderRadius: 99 }} />
      <View>
        <Text style={{ fontFamily: 'semibold', fontSize: 24, fontWeight: 'bold' }}>{currentUser.displayName}</Text>
        <Text style={{ fontFamily: 'semibold', fontSize: 16, color: Colors.GRAY }}>{currentUser.email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})