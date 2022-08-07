import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/user'



const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
      >
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems : 'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: 'blue' }}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLocaleLowerCase() + '...'
                : story.user.toLocaleLowerCase()}


            </Text>
          </View>
        ))}
      </ScrollView>
      <Text style={{ color: 'white' }}>Stories</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: '#ff8501',

  }
})
export default Stories