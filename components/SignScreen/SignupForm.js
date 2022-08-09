import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Formik } from "formik"
import * as Yup from 'yup'
import Validator from 'email-validator'
import { firebase, db } from '../../firebase'


const SignupForm = ({ navigation }) => {

  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An Email is required'),
    password: Yup.string().required().min(8, 'Yoru password has to have at least 8 characters'),
    username: Yup.string().required().min(2, 'A username is required')
  })

  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }
  const onSignup = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      // console.log('authUser=========', authUser.user.email)

      db.collection('users')
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePicture()
        })

      // console.log('firebase user c reated successful !!', email, password)
    } catch (error) {
      Alert.alert('my load......', error.message)
    }
  }
  return (
    <View style={styles.wrapper} >
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        onSubmit={(values) => onSignup(values.email, values.password, values.username)}

        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isValid }) => {
          // console.log(isValid)
          return (
            <>
              <View style={[styles.inputField, {
                borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
              }]}>
                <TextInput
                  placeholderTextColor='#444'
                  placeholder='Email'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  autoFocus={true}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View style={[styles.inputField, {
                borderColor: values.username.length < 1 || values.username.length > 3 ? '#ccc' : 'red'
              }]}>

                <TextInput
                  placeholderTextColor='#444'
                  placeholder='username'
                  autoCapitalize='none'
                  textContentType='username'
                  autoCorrect={false}
                  autoFocus={true}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </View>

              <View style={[styles.inputField, {
                borderColor: values.password.length < 1 || values.password.length > 6 ? '#ccc' : 'red'
              }]}>

                <TextInput
                  placeholderTextColor='#444'
                  placeholder='Password'
                  autoCapitalize='none'
                  textContentType='password'
                  autoCorrect={false}
                  autoFocus={true}
                  secureTextEntry={true}

                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              {/* <View style={{
              alignItems: 'flex-end',
              marginBottom: 30
            }}>
              <Text style={{
                color: '#6bb0f5',
              }}>Forgot Password?</Text>
            </View> */}

              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>
              <View style={styles.signupContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{ color: '#68b0f5' }}>
                    Log In

                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }}
      </Formik>

    </View >
  )
}


const styles = StyleSheet.create({

  wrapper: {
    marginTop: 80
  },
  inputField: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1
  },
  button: (isValid) => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7', //COLOR HIGHTER INSTALL
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4

  }),
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  }
})






export default SignupForm