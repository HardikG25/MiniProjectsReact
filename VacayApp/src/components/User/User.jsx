import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div>
    <div className='text-5xl text-red-800 text-center font-semibold mt-[200px] mb-10' >User: {userId}</div>
    <p className='text-2xl text-black text-center font-medium mb-[200px]'>Welcome to the travelling duniya!!</p>
    </div>
  )
}

export default User