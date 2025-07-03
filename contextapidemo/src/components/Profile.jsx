import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user)
    return (
      <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow">
        Please Login
      </div>
    )

  return (
    <div className="bg-green-100 text-green-800 p-4 rounded-md shadow">
      Welcome <span className="font-semibold">{user.username}</span>
    </div>
  )
}

export default Profile
