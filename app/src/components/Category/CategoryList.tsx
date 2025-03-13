import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchCategoryAPIs } from '@/src/apis'
import { Category } from '@/src/model/interface'
import { FlatList } from 'react-native-gesture-handler'

export default function CategoryList() {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    fetchCategoryAPIs()
      .then(res => {

        if (Array.isArray(res)) setCategories(res)
      }
      )
  }, [])


  return (
    categories &&
    <View style={{ marginTop: 15 }}>
      <Text style={styles.heading}>Category</Text>

      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }: any) => (
          <View style={styles.categoryContainer}>
            <Image source={{ uri: item?.image }}
              style={{
                height: 40,
                width: 40
              }}
            />
            <Text style={{
              fontFamily: 'outfit-bold',
              marginTop: 3
            }}>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
  },
  categoryContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
})