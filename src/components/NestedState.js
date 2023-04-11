import React from 'react'
import { useState } from 'react'

const NestedState = () => {

  const [sampleState, setSampleState] = useState({
    name :"ABC",
    age: 20,
    address : {
      house : {
        number: "11/A",
        street: "2"
      } ,
      city: "Pune"
    }
  })

  const changeState = () => {
   const cloneObj = {...sampleState};
   cloneObj.address.house.number = "33333"
   setSampleState(cloneObj)
  }


  return (
    <div>
      <button onClick={() => changeState()}>State Update</button>
    </div>
  )
}

export default NestedState