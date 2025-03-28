import Ionicons from "@expo/vector-icons/Ionicons";
import { QueryClient } from "@tanstack/react-query";
import { useFonts } from 'expo-font';
import { Stack, useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import { injectStore } from "../services/axiosCustomiz";
import { toastConfig } from "../services/toastCustomize";
import { useEffect, useState } from "react";
import { fetchStripeKeys } from "../apis";
import { StripeProvider } from "@stripe/stripe-react-native";

injectStore(store)

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf')
  });
  const router = useRouter();




  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Stack>
            <Stack.Screen name="Landing"
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="tabs"
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="auth"
              options={{
                headerTitle: '',
                headerTransparent: true,
                // headerShown: false,
                headerLeft: () => (
                  <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 10 }} onPress={() => router.replace('/Landing')} />
                )
              }}
            />
            <Stack.Screen name="recipe/recipeByCategory"
              options={{
                headerTransparent: true,
                headerTitle: ''
              }}
            />
            <Stack.Screen name="recipe/recipeDetail"
              options={{
                headerTitle: 'Detail',
                headerRight: () => (
                  <Ionicons name="share-outline" size={24} color="black" style={{ marginRight: 10 }} />
                )
              }}
            />

            <Stack.Screen name="cart/ShoppingCart"
              options={{
                headerTitle: 'My Cart',
                headerTitleAlign: 'center',
                headerRight: () => (
                  <Ionicons name="share-outline" size={24} color="black" style={{ marginRight: 10 }} />
                )
              }}
            />

            <Stack.Screen name="product/productDetail"
              options={{
                headerTitle: '',
                headerTitleAlign: 'center',
                headerTransparent: true,

              }}
            />
          </Stack>
          <Toast config={toastConfig} />
        </>
      </PersistGate>
    </Provider>

  )
}
