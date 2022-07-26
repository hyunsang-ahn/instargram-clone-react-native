import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/material-outlined/72/like--v1.png',
    likedImageUrl: 'https://img.icons8.com/stickers/72/like--v3.png'
  },
  {
    name: 'Comment',
    imageUrl: 'https://img.icons8.com/ios-glyphs/72/speech-bubble--v1.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://img.icons8.com/ios-filled/72/sent.png',
  },
  {
    name: 'Save',
    imageUrl: 'https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-Save-social-media-bearicons-glyph-bearicons.png',
  },



]


const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginTop: 10 }}>
        <PostFotter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />



      </View>

    </View>
  )
}

const PostHeader = ({ post }) => (

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: 'blue', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
    </View>
    <View>
      <Text style={{ color: 'blue', fontWeight: '900' }}>...</Text>

    </View>
  </View>
)

const PostImage = ({ post }) => (
  <View style={{
    width: '100%',
    height: 450
  }}>
    <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }} />
    {/* <Image source={{ uri: 'https://www.flaticon.com/free-icon/heart_1077086?term=instagram&related_id=1077086' }}  style={{ height: '100%', resizeMode: 'cover' }}/> */}
  </View>
)

const PostFotter = () => (
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.leftFooterIconContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={[styles.footerIcon, styles.shareIcon]} imgUrl={postFooterIcons[2].imageUrl} />

    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />

    </View>
  </View>

)

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
)

const Likes = ({ post }) => (
  <View style={{ flexDirection: 'row', marginTop: 4 }}>
    <Text style={{ fontWeight: '600' }}>{post.likes.toLocaleString('en')}명이 좋아합니다</Text>

  </View>
)

const Caption = ({ post }) => (
  <View style={{ marginTop: 5, }}>

    <Text>
      <Text style={{ fontWeight: '600' }}>{post.user}</Text>
      <Text>{post.caption}</Text>
    </Text>


  </View>

)

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.length && (
      <Text style={{ color: 'gray' }}>
        {post.comments.length > 1 ? '댓글' : ''} {post.comments.length}
        {post.comments.length > 1 ? '개 모두보기' : '개 보기'}
      </Text>
    )}
  </View>
)

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'black' }}>
          <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',

  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  shareIcon: {
    transform: [{ rotate: '320deg' }],
    marginTop: -3
  },
  leftFooterIconContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between'
  }
})
export default Post