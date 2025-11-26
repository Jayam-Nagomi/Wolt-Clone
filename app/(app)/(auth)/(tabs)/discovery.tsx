import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import useUserStore from '@/hooks/use-userstore'

const discovery = () => {
  const {setIsGuest} = useUserStore();
  return (
    <View style={{padding: 10}}>
      <Button title='Go to Login' onPress={() => setIsGuest(false)}/>    
      </View>
  )
}

export default discovery

const styles = StyleSheet.create({})