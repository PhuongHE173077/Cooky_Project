import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://chupanh.vn/wp-content/uploads/2017/12/concept-chup-anh-mon-an-chum-anh-banh-ngot-nhin-la-me-ma00133.jpg' }} style={styles.logo} />
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
          <Ionicons name={secureText ? "eye-off" : "eye"} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.signupText} onPress={() => navigation.navigate('Signup')}> Signup</Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F8F8F8' },
  logo: { alignSelf: 'center', width: '100%', height: '50%', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'left' },
  subtitle: { fontSize: 14, color: 'gray', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  input: { borderBottomWidth: 1, borderBottomColor: 'gray', padding: 8, fontSize: 16, width: '100%' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center' },
  eyeIcon: { position: 'absolute', right: 10 },
  forgotText: { textAlign: 'right', color: 'gray', marginTop: 10 },
  loginButton: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  loginText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  footerText: { textAlign: 'center', marginTop: 20, color: 'gray' },
  signupText: { color: 'green', fontWeight: 'bold' },
});
