import { View, Text } from 'react-native'
import React from 'react'
import ExploreHeader from '@/src/components/Header/ExploreHeader'
import { Colors } from '@/src/services/Colors'

export default function Explore() {
  return (
    <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>
      <ExploreHeader />
    </View>
  )
}