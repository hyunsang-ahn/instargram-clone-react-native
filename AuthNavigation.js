import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { firebase } from './firebase'
const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const useHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)
  useEffect(() => {
    console.log('instagram clone start.. .auth stage...1')
    console.log('firebase.auth()================',firebase.auth())
    firebase.auth().onAuthStateChanged(user => useHandler(user))
    console.log('currentUser===============',currentUser)
  }, [])
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation