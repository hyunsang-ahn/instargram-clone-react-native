import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddNewPost from '../components/home/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen