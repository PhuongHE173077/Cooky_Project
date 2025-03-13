import { View, Text, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { USER_IMAGE_DEFAULT } from '@/src/services/Constant'
const user = {
  email: 'phuongddhe173077@fpt.edu.vn',
  displayName: 'phuongddhe173077',
  avatar: null,
  bio: 'Hello everyone !'
}
export default function IntroHeader() {

  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <View style={{
      display: 'flex',
      flexDirection: "row",
      gap: 8,
      alignItems: 'center',
      justifyContent: 'space-between'
    }} >
      <View style={{
        display: 'flex',
        flexDirection: "row",
        gap: 8,
        alignItems: 'center'
      }}>
        <Image source={{ uri: user.avatar ? user.avatar : USER_IMAGE_DEFAULT }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 99
          }}
        />
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 16
          }}
        >
          Hello,{user?.displayName}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>{isEnabled ? 'Veg' : 'None-Veg'}</Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </View>
  )
}