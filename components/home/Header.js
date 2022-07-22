import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
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
  }
})