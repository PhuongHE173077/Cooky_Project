import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Colors } from '@/src/services/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function ProductHeader() {
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.container}>
        {/* Background mờ */}
        <Image source={require('../../assets/images/Banana.png')} style={styles.backgroundImage} />
        <BlurView intensity={20} style={styles.blur} />
        {/* Ảnh chính */}
        <Image source={require('../../assets/images/Banana.png')} style={styles.mainImage} />


      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'semibold' }}>Project Name</Text>

        <Ionicons name='heart-outline' size={24} />
      </View>
      <Text style={{ fontSize: 14, fontFamily: 'semibold', color: Colors.GRAY }}>1kg, Price</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 10 }}>
          <TouchableOpacity style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 50, fontFamily: 'semibold' }}>-</Text>
          </TouchableOpacity>
          <View style={{ height: 40, width: 40 }}>
            <View style={{ borderWidth: 0.2, borderColor: Colors.GRAY, borderRadius: 15, paddingVertical: 5 }}>
              <Text style={{ fontSize: 24, fontFamily: 'semibold', textAlign: 'center' }}>1</Text>
            </View>
          </View>
          <TouchableOpacity >
            <Text style={{ fontSize: 40, fontFamily: 'semibold', fontWeight: 'bold', marginBottom: 6 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 23, fontFamily: 'semibold', fontWeight: 'bold' }}>
            $4.99
          </Text>
        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#dfe4ea',
    // borderRadius: 50
  },
  backgroundImage: {
    width: 250,
    height: 180,
    position: 'absolute',
    opacity: 0.2,
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: 300,
    bottom: 0,
  },
  mainImage: {
    width: 200,
    height: 160,
    borderRadius: 20,

  },
});
