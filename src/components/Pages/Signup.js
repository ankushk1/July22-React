import React from 'react'
import {useParams} from 'react-router-dom';
const Signup = () => {

  const params = useParams();
  console.log(params)

  return (
    <div>Signup</div>
  )
}

export default Signup