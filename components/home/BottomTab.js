import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements';
export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/48/000000/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/000000/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/material/30/000000/search--v1.png',
    inactive: 'https://img.icons8.com/ios-glyphs/30/000000/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/000000/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/50/000000/instagram-reel.png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/fluency-systems-filled/30/000000/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/30/000000/shopping-bag-full.png',
  },
  {
    name: 'Profile',
    active:
      'https://awsimages.detik.net.id/community/media/visual/2021/02/15/donald-trump-lolos-dari-pemakzulan-apa-dampak-bagi-dirinya-joe-biden-dan-amerika-serikat_43.jpeg',
    inactive:
      'https://awsimages.detik.net.id/community/media/visual/2021/02/15/donald-trump-lolos-dari-pemakzulan-apa-dampak-bagi-dirinya-joe-biden-dan-amerika-serikat_43.jpeg',
  },
];
const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Hoem')
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>

      <Divider width={1} orientation='vertical' />

      <View style={styles.container}>
        {icons.map((icon, index) => (

          <Icon key={index} icon={icon} />

        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {

  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30
  }
})

export default BottomTab