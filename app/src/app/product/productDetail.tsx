import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Colors } from '@/src/services/Colors'
import ProductHeader from '@/src/components/Header/ProductHeader'
import ProductDescription from '@/src/components/Product/ProductDescription'
import Button from '@/src/components/Button/Button'

export default function productDetail() {

  const { product } = useLocalSearchParams()

  return (
    <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>
      <FlatList data={[]}
        renderItem={null}
        ListHeaderComponent={
          <View>
            <ProductHeader />

            <ProductDescription />
          </View>
        } />
      <View style={{ padding: 20 }}>
        <Button lable='Add to cart' onPress={() => { }} icon='cart' loading={false} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})