import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../Signup'
import Login from '../Login'
import Home from '../Home'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
