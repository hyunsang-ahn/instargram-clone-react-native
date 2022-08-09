



import React, { useEffect, useState } from 'react'

const USERS = () => {
  // console.log('USERS COMPONENT START~!!!!!!!')
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
  return arr
}

export default USERS