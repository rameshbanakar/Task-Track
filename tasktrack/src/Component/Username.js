import React from 'react'
import { useSelector } from 'react-redux'

export default function Username() {
    const name=useSelector(state=>state.names)
  return (
    <div className='userbackground'>
        <h5>Welcome:{name}</h5>
    </div>
  )
}
