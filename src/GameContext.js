import React, { createContext, useContext, useState } from 'react'

const GameContext = createContext()

export const useGames = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const fetchGames = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.rawg.io/api/games?key=e122121fd8d64783b645bda233bf59f8')
      const data = await response.json()
      setGames(data.results)
    } catch (error) {
      console.error('Error fetching games:', error)
    }
    setLoading(false)
  }

  const loginUser = (username) => {
    setUser({ username })
  }

  const logoutUser = () => {
    setUser(null)
  }

  const value = {
    games,
    loading,
    user,
    fetchGames,
    loginUser,
    logoutUser
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}
