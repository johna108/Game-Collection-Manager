import React, { useState } from 'react'
import { useGames } from './GameContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser } = useGames()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(email)
    navigate('/collection')
  }

  return (
    <div>
      <h1>Login to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
