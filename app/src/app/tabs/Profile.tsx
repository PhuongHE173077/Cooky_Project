import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import IntroHeader from '@/src/components/Header/IntroHeader'
import ProfileHearder from '@/src/components/Header/ProfileHearder'
import ProfileFeature from '@/src/components/Profile/ProfileFeature'

export default function Profile() {
  return (
    <View style={{
      height: '100%',
      backgroundColor: Colors.WHITE
    }}>
      <ProfileHearder />
      <ProfileFeature />
    </View>
  )
}