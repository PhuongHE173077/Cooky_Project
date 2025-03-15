import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import Search from '@/src/components/Search/Search'
import ListSlider from '@/src/components/Slider/Courosel'
import CarouselRN from '@/src/components/Slider/Courosel'
const dataSlider = [
  { _id: 1, image_url: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896.jpg', title: 'Black Friday', subText: ' Sale to 50 % and have many vochers' },
  { _id: 2, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU', title: 'Anh 2', subText: 'Black Friday sale 30 % and have many vochers' },
  { _id: 3, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUhMo1wDAmoHQXQRo1O5_i6LndoOQmJx6p1IcTfFpY4EAHGuNEFZNf-77sdZi4YqOTjo&usqp=CAU', title: 'Anh 3', subText: 'Black Friday sale 30 % and have many vochers' },
  { _id: 4, image_url: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896.jpg', title: 'Black Friday', subText: ' Sale to 50 % and have many vochers' },
  { _id: 5, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU', title: 'Anh 2', subText: 'Black Friday sale 30 % and have many vochers' },

]
export default function Shop() {
  return (
    <View style={{ height: '100%', backgroundColor: Colors.WHITE }}>

      <Search />

      {/* <SliderList dataSlider={dataSlider} /> */}


      <CarouselRN data={dataSlider} />

    </View>
  )
}

const styles = StyleSheet.create({


})