import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomePage/HomeScreen';
import { FoodScreen } from '../screens/HomePage/FoodScreen';
import { KitchenScreen } from '../screens/HomePage/KitchenScreen';
import { CartScreen } from '../screens/HomePage/CartScreen';
import { ProfileScreen } from '../screens/HomePage/ProfileScreen';


const Tab = createBottomTabNavigator();
interface Props {
  navigation: any
}
const BottomNavigation: React.FC<Props> = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', height: 70 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#F36C24',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Foods"
        component={FoodScreen}
        options={{
          tabBarLabel: 'Foods',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={24} />
          ),
        }}
      />


      <Tab.Screen
        name="Kitchen"
        component={KitchenScreen}
        options={{
          tabBarLabel: 'Kitchen',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="soup-kitchen" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen} // Replace with Profile screen
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigation