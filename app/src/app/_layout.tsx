import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf')
  });

  return (
    <Stack >
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
          headerShown: false
        }}
      />
      <Stack.Screen name="recipe/recipeByCategory"
        options={{
          headerTransparent: true,
          headerTitle: ''
        }}
      />

    </Stack>
  )

}
