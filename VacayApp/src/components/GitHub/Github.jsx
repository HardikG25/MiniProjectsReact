import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Github() {
const data = useLoaderData()

  return (
    <div className='text-5xl text-white flex justify-center items-center text-center font-extrabold mt-10 mb-10'>
      <Link to="https://github.com/hardikg25" className="bg-red-800 p-4 rounded-lg hover:text-white hover:bg-black">
            Visit My GitHub
      </Link>
      <img className='mt-10 ml-20' src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  )

}

export default Github

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/hardikg25')
  return response.json()
}