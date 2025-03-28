import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import IntroHeader from '@/src/components/Header/IntroHeader'
import CreateRecipe from '@/src/components/Recipe/CreateRecipe'
import CategoryList from '@/src/components/Category/CategoryList'
import CarouselRN from '@/src/components/Slider/Courosel'
import { dataSlider } from '@/src/constants/slideDedault'
import LastRecipe from '@/src/components/Recipe/LastRecipe'

export default function Home() {

  return (
    <ScrollView
      style={{
        height: '100%',
        backgroundColor: Colors.WHITE,
        padding: 20
      }}
    >
      <IntroHeader />
      <CreateRecipe />
      <CategoryList />
      <LastRecipe />

    </ScrollView>
  )
}