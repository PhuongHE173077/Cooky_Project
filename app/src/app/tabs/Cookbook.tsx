import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/src/services/Colors'
import CookBookHeader from '@/src/components/Header/CookBookHeader'
import CookBookContent from '@/src/components/CookBook/CookBoxContent'
import { fetchRecipeAPIs } from '@/src/apis'

export default function Cookbook() {
  const [repecies, setRepecies] = React.useState<any[]>([])
  const [active, setActive] = React.useState('My Recipes')
  useEffect(() => {
    if (active === 'My Recipes') {
      fetchRecipeAPIs()
        .then(res => {
          if (!Array.isArray(res)) return
          setRepecies(res)
        })
    } else {
      fetchRecipeAPIs()
        .then(res => {
          if (!Array.isArray(res)) return
          setRepecies(res)
        })
    }
  }, [active])
  return (
    <View style={{ height: '100%', backgroundColor: Colors.WHITE, padding: 20 }} >
      <CookBookHeader active={active} setActive={setActive} />
      <CookBookContent repecies={repecies} />
    </View>
  )
}