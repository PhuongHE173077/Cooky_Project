import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import Toast from "react-native-toast-message";
import { toastConfig } from "../services/toastCustomize";
import { injectStore } from "../services/axiosCustomiz";

injectStore(store)

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf')
  });

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
                headerTransparent: true,
                headerTitle: ''
              }}
            />
            <Stack.Screen name="recipe/recipeByCategory"
              options={{
                headerTransparent: true,
                headerTitle: ''
              }}
            />
          </Stack>
          <Toast config={toastConfig} />
        </>
      </PersistGate>
    </Provider>
  )
}
