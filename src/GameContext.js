import React, { createContext, useContext, useState } from 'react'

const GameContext = createContext()

export const useGames = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {
  
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [myCollection, setMyCollection] = useState([])
  const [users, setUsers] = useState([
    
    { id: 1, username: 'john', email: 'jhonsamliv@gmail.com', password: '123' },
    { id: 2, username: 'priya', email: 'priya@gmail.com', password: '123' },
    { id: 3, username: 'admin', email: 'admin@gmail.com', password: '123' }
  ])

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

  const loginUser = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password)
    if (foundUser) {
      setUser({ id: foundUser.id, username: foundUser.username, email: foundUser.email })
      return { success: true, message: 'Login successful!' }
    }
    return { success: false, message: 'Invalid email or password' }
  }

  const registerUser = (username, email, password) => {

    const existingUser = users.find(u => u.email === email || u.username === username)

    const newUser = {
      id: users.length + 1,
      username,
      email,
      password
    }
    
    setUsers([...users, newUser])
    setUser({ id: newUser.id, username: newUser.username, email: newUser.email })
    return { success: true, message: 'Registration successful!' }
  }

  const logoutUser = () => {
    setUser(null)
  }

  const addToCollection = (game) => {
    const isAlreadyAdded = myCollection.find(g => g.id === game.id)
    if (!isAlreadyAdded) {
      setMyCollection([...myCollection, game])
    }
  }

  const removeFromCollection = (gameId) => {
    setMyCollection(myCollection.filter(game => game.id !== gameId))
  }

  const value = {
    games,
    loading,
    user,
    users,
    myCollection,
    fetchGames,
    loginUser,
    registerUser,
    logoutUser,
    addToCollection,
    removeFromCollection
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}
