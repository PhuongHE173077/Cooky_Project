import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const DATA = [
  'https://res.cloudinary.com/dl3ucqngx/image/upload/v1737726636/users/lhmjydx5zmh0msohikr8.jpg',
  'https://media.istockphoto.com/id/497959594/vi/anh/b%C3%A1nh-t%C6%B0%C6%A1i.jpg?s=612x612&w=0&k=20&c=XkGNX-VSRsVUtYOqnQ_VVgkx9BUFO9e8C7kLnWfx8GM=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yjl9l04e7mresMDOm49zEPtC63V0lylQ0A&s',
];

export const Video = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hôm nay ăn gì?</Text>
      <View style={styles.gridContainer}>
        {DATA.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <Text style={styles.productName}>Product name</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});