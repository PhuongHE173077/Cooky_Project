import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from './src/screens/Auth/Login';
import BottomNavigation from './src/screens/BottomNavigation';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SignUpScreen } from './src/screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>


  );
}
