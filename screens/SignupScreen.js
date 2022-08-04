import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/SignScreen/SignupForm'
const INSTAGRAM_LOGO = 'https://www.bodycheckcancer.com/wp-content/uploads/2018/02/hd-instagram-logo-new-design-is-png-format-18.png'
const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>
      <SignupForm navigation={navigation}/>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    felx: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60
  }
})
export default SignupScreen