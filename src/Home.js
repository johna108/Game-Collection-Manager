import React from 'react'
import { useGames } from './GameContext'

const Home = () => {
  const { user } = useGames()

  return (
    <div>
      <h1>Welcome to the Game Collection Manager</h1>
      {user ? (
        <p>Welcome back, {user.username}! Your one-stop solution for managing your game collection.</p>
      ) : (
        <p>Your one-stop solution for managing your game collection.</p>
      )}
    </div>
  )
}

export default Home
