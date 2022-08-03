import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'




const LoginForm = () => {

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An Email is required'),
    password: Yup.string().required().min(8, 'Yoru password has to have at least 8 characters')
  })

  return (
    <View style={styles.wrapper} >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={styles.inputField}>
              <TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={styles.inputField}>

              <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                textContentType='password'
                autoCorrect={false}
                autoFocus={true}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{
              alignItems: 'flex-end',
              marginBottom: 30
            }}>
              <Text style={{
                color: '#6bb0f5',
              }}>Forgot Password?</Text>
            </View>

            <Pressable titleSize={20} style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={{ color: '#68b0f5' }}>
                  Sign Up

                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
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
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4

  },
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






export default LoginForm