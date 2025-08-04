import React, { useEffect } from 'react'
import { useGames } from './GameContext'

const Collection = () => {
  const { games, loading, fetchGames } = useGames()

  useEffect(() => {
    fetchGames()
  }, [])

  if (loading) {
    return <div><h1>Loading games...</h1></div>
  }

  return (
    <div>
      <h1>Game Collection</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {games.map(game => (
          <div key={game.id} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            width: '300px' 
          }}>
            <img 
              src={game.background_image} 
              alt={game.name}
              style={{ width: '100%', height: '150px' }}
            />
            <h3>{game.name}</h3>
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collection
