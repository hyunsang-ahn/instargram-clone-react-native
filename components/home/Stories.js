import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { USERS } from '../../data/user'


const Stories = () => {
  console.log('Stories COMPONENT START~!!!!!!!')
  const [arr, setArr] = useState([])
  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api?results=15')
    const data = await response.json()
    data.results.map((c) => {
      let temp_obj = {
        user: c.name.first,
        image: c.picture.large,
      }
      setArr(arr => [...arr, temp_obj]);

    })

  }
  useEffect(()=>{
    getRandomProfilePicture()
  },[])
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
      >
        {arr?.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
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