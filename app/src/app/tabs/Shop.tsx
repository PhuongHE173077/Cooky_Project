import { fetchAllProductAPIs } from '@/src/apis'
import ShoppingHeader from '@/src/components/Header/ShoppingHeader'
import Search from '@/src/components/Search/Search'
import BestSaler from '@/src/components/Shop/BestSaler'
import ExclusiveOffer from '@/src/components/Shop/ExclusiveOffer'
import Grocere from '@/src/components/Shop/Grocere'
import CarouselRN from '@/src/components/Slider/Courosel'
import { dataSlider } from '@/src/constants/slideDedault'
import { Colors } from '@/src/services/Colors'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function Shop() {
  const [products, setProducts] = React.useState<any[]>([])

  useEffect(() => {
    fetchAllProductAPIs()
      .then(res => {
        if (Array.isArray(res)) setProducts(res)

      })
  }, [])

  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>


          <ShoppingHeader />

          <CarouselRN data={dataSlider} />

          <ExclusiveOffer products={products} />

          <BestSaler products={products} />

          <Grocere products={products} />

        </View>
      }
    />

  )
}

const styles = StyleSheet.create({


})