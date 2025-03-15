import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/src/services/Colors'
import Button from '@/src/components/Button/Button'
import { Link, Redirect, router, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-toast-message'
import { loginAPIs } from '@/src/apis'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/src/redux/authSlice'


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [togglePassword, setTogglePassword] = useState(false)
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const dispath = useDispatch()
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href={'/tabs/Home'} />
  }

  const handleLogin = async () => {
    setErrorEmail('')
    setErrorPassword('')
    if (!email) {
      setErrorEmail('Please enter email')
      return
    }
    if (!email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')) {
      setErrorEmail("Email don't match format! Ex: abc@xyz.com ")
      return
    }
    if (!password) {
      setErrorPassword('Please enter password')
      return
    }
    await loginAPIs(email, password)
      .then(async (result: any) => {

        await AsyncStorage.setItem('accessToken', result.accessToken)
        await AsyncStorage.setItem('refreshToken', result.refreshToken)
        dispath(setUser(result))

        router.push('/tabs/Home')

      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: error.message,

        })
      })


    // Toast.show({
    //   type: 'success',
    //   text1: 'Login Success',
    // })

  }



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
            borderBottomWidth: 1,
          }}
          placeholder='Enter your email?'
          onChangeText={e => setEmail(e.trim())}
        />

        {errorEmail &&
          <View style={styles.erorrContainer}>
            <Ionicons name='alert-circle-outline' size={24} color={Colors.RED} />
            <Text style={{

            }}
            >{errorEmail}</Text>
          </View>}

      </View>
      <View style={{ padding: 20, paddingTop: 15 }}>
        <Text>Password</Text>
        <View style={{
          borderBottomColor: Colors.GRAY,
          borderBottomWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>

          <TextInput
            style={{
              backgroundColor: Colors.WHITE,
              width: '95%',
              paddingVertical: 10,
              paddingLeft: 10
            }}
            placeholder='Enter your password?'
            secureTextEntry={!togglePassword}
            onChangeText={e => setPassword(e)}
          />
          <TouchableOpacity onPress={() => setTogglePassword(!togglePassword)}>
            <Ionicons name={togglePassword ? 'eye-outline' : 'eye-off-outline'} size={20} />
          </TouchableOpacity>
        </View>
        {errorPassword &&
          <View style={styles.erorrContainer}>
            <Ionicons name='alert-circle-outline' size={24} color={Colors.RED} />
            <Text style={{

            }}
            >{errorPassword}</Text>
          </View>
        }

      </View>

      <TouchableOpacity style={{ padding: 20, paddingTop: 15 }}>
        <Button lable='Login' onPress={() => handleLogin()} icon='finger-print-outline' loading={false} />
      </TouchableOpacity>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
        <Text style={{ textAlign: 'center', fontFamily: 'outfit' }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push('/auth/Signup')}>
          <Text style={{ textDecorationLine: 'underline', color: 'blue', fontFamily: 'outfit' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: '100%'
  },
  erorrContainer: {
    borderWidth: 1,
    borderColor: Colors.RED,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
    paddingVertical: 3
  }
})