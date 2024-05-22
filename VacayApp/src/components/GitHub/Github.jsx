import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

  return (
    <div>Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  )

}

export default Github

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/hardikg25')
  return response.json()
}