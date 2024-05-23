import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

  return (
    <div className='text-5xl text-red-800 flex justify-center items-center  text-center font-semibold mt-10 mb-10'>Github Followers: {data.followers}
      <img className='mt-10 ml-20' src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  )

}

export default Github

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/hardikg25')
  return response.json()
}