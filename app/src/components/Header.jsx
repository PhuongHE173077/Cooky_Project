import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const image = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3dU2YNn01QVCNDI5FLgsU0vBgwp_sSJx0Q&s' };
export default function Header() {
  return (
    <View

      style={styles.container}
    >

      <View style={styles.headerTop}>
        <View style={{
          flexDirection: 'row',
          gap: '10px'
        }}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3dU2YNn01QVCNDI5FLgsU0vBgwp_sSJx0Q&s' }}
            style={styles.profileImage}
          />
          <Text style={styles.greeting}>Hello, Olivia Wilson!</Text>

        </View>


        <MaterialCommunityIcons name="bell" size={24} color="#fff" />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.tagline}>Making life sweeter, one <Text style={styles.highlight}>cake</Text> at a time.</Text>

      </View>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 250,
    backgroundColor: '#EAB543'
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  tagline: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',

  },
  highlight: {
    color: '#FFD700',
  },
  textContent: {
    alignItems: 'center'
  }
});
