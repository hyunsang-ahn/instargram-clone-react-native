import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import { Divider } from 'react-native-elements'
const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      {/* <Divider width={1} orientation='vertical' /> */}
      {/* <PostHeader post={post} /> */}
    </View>
  )
}

const PostHeader = ({ post }) => (

  <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
    <View>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text></Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',

  }
})
export default Post