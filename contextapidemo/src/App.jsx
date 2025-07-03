import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <UserContextProvider>
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Chetan Bhai</h1>
        <div className="w-full max-w-md space-y-6">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </div>
  )
}

export default App
