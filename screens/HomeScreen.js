import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import BottomTab from '../components/home/BottomTab';
import { bottomTabIcons } from '../components/home/BottomTab';
import Header from '../components/home/Header'
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';
import { db } from '../firebase'
const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db
    .collectionGroup('posts')
    // .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      // console.log('data======', snapshot.docs.map(doc => doc.data()))
      setPosts(snapshot.docs.map(post => ({ id: post.id, ...post.data() })))

    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}

      </ScrollView>
      <BottomTab icons={bottomTabIcons} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})









export default HomeScreen;


