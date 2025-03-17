import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardFeature from './CardFeature'
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '@/src/services/Colors'
import { useRouter } from 'expo-router'
import { useDispatch } from 'react-redux'
import { logout } from '@/src/redux/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ProfileFeature() {
  const router = useRouter()
  const dispath = useDispatch()

  const handleLogout = async () => {
    dispath(logout())
    // await AsyncStorage.removeItem('accessToken')
    router.replace('/auth/Login')
  }
  return (
    <View style={{ marginTop: 20 }}>
      <CardFeature name="Orders" IconName="shopping-bag" onPress={() => router.push('/cart/ShoppingCart')} iconLibrary={Feather} />
      <CardFeature name="My Details" IconName="card-account-details-outline" onPress={() => { }} iconLibrary={MaterialCommunityIcons} />
      <CardFeature name="Delivery Address" IconName="location-outline" onPress={() => { }} iconLibrary={Ionicons} />
      <CardFeature name="Payment Methods" IconName="cc-mastercard" onPress={() => { }} iconLibrary={FontAwesome} />
      <CardFeature name="Notifications" IconName="notifications-outline" onPress={() => { }} iconLibrary={Ionicons} />
      <CardFeature name="Help" IconName="help-circle" onPress={() => { }} iconLibrary={Feather} />
      <CardFeature name="Help" IconName="exclamationcircleo" onPress={() => { }} iconLibrary={AntDesign} />

      <TouchableOpacity
        style={{
          padding: 20,
          borderWidth: 0.2,
          borderColor: '#E2E2E2',
          backgroundColor: '#F2F3F2',
          margin: 20,
          marginTop: 60,
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => handleLogout()}
      >
        <Entypo name="log-out" size={24} color={Colors.PRIMARY} />
        <View>

        </View>
        <Text style={{
          color: Colors.PRIMARY,
          fontSize: 20,
          fontFamily: 'medium',
          marginVertical: 6,
          marginLeft: 120
        }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})