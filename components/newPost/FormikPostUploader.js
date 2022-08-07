import { View, Text, TextInput, Image, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url'
import { firebase, db } from '../../firebase'
const PLACEHOLDER_IMG = 'https://pacificpatiostructures.com/wp-content/uploads/2016/06/import_placeholder.png'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character')

})



const FormikPostUploader = ({ navigation }) => {
  const [thembnailUrl, setThembnailUrl] = useState(PLACEHOLDER_IMG)
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

  const getUserName = () => {
    const user = firebase.auth().currentUser
    console.log('user=============', db
      .collection('users')
      .where('owner_uid', "==", user.uid)
      .limit(1))
    const unsubscribe = db
      .collection('users')
      .where('owner_uid', "==", user.uid)
      .limit(1)
      .onSnapshot(
        snapshot => snapshot.docs.map(doc => {
          console.log('doc================', doc.data())
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture
          })
        })
      )
    return unsubscribe
  }

  useEffect(() => {
    getUserName()
  }, [])

  const upLoadPostToFireBase = (imageUrl, caption) => {
    console.log('======', firebase.auth().currentUser.email)
    console.log('currentLoggedInUser==============', currentLoggedInUser)
    const unsubscribe = db
      .collection('user')
      .doc(firebase.auth().currentUser.email)
      .collection('posts')
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_user: [],
        comments: []
      })
      .then(() => navigation.goBack())
    return unsubscribe
  }

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        upLoadPostToFireBase(values.imageUrl, values.caption)
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >

      {/* caption, url */}
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{
            margin: 20,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
            <Image source={{
              uri: validUrl.isUri(thembnailUrl)
                ? thembnailUrl
                : PLACEHOLDER_IMG
            }}
              style={{ width: 100, height: 100 }} />
            <View style={{ flex: 1, marginLeft: 12 }}>

              <TextInput
                onChange={(e) => setThembnailUrl(e.nativeEvent.text)}
                style={{ color: 'white', fontSize: 20 }}
                placeholder='write caption....'
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('cpation')}
                value={values.caption}
              />
            </View>

          </View>
          <Divider width={0.2} orientation='vertical' />
          <TextInput
            style={{ color: 'white', fontSize: 20 }}

            placeholder='enter image url'
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (

            <Text style={{ fontSize: 10, color: 'red' }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        </>
      )}


    </Formik>
  )
}

export default FormikPostUploader