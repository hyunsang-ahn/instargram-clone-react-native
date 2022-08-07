import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { firebase } from '../../firebase'

const handleSignOut = async () => {
  try {
    firebase.auth().signOut()
    console.log('Signed Out')
  } catch (error) {
    console.log(error)
  }

}

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/material-outlined/452/plus-2-math--v1.png'
            }}
          />



        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/windows/344/like--v1.png'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/ios/344/facebook-messenger--v1.png'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  iconsContainer: {
    flexDirection: 'row',

  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  unreadBadge: {
    backgroundColor: "#FF3258",
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100

  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600'
  },
})