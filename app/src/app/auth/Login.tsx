import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import Button from '@/src/components/Button/Button'
import { Link, router, useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: Colors.WHITE, height: '100%' }}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/cooky-logo.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 99
          }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 25
          }}
        >Loging</Text>
        <Text
          style={{
            fontFamily: 'outfit',
            color: Colors.GRAY,
            fontSize: 15,
            marginTop: 10
          }}
        >Enter the Email and Password</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text>Email</Text>
        <TextInput
          style={{
            backgroundColor: Colors.WHITE,
            padding: 10,
            marginTop: 10,
            borderBottomColor: Colors.GRAY,
            borderBottomWidth: 1
          }}
          placeholder='Enter your email?'
        />
      </View>

      <View style={{ padding: 20 }}>
        <Text>Password</Text>
        <TextInput
          style={{
            backgroundColor: Colors.WHITE,
            padding: 10,
            marginTop: 10,
            borderBottomColor: Colors.GRAY,
            borderBottomWidth: 1
          }}
          placeholder='Enter your password?'
        />
      </View>
      <TouchableOpacity style={{ padding: 20 }}>
        <Button lable='Login' onPress={() => router.push('/tabs/Home')} icon='finger-print-outline' />
      </TouchableOpacity>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
        <Text style={{ textAlign: 'center' }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push('/auth/Signup')}>
          <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: '100%'
  }
})