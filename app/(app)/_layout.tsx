import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name='(auth)' options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='(public)' options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  )
}

export default Layout