import React, { useEffect } from 'react'
import { useGames } from './GameContext'

const Collection = () => {
  const { games, fetchGames, addToCollection } = useGames()

  useEffect(() => {
    fetchGames()
  }, [])

  

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Games</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {games.map(game => (
          <div key={game.id} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '300px', // Set a fixed height
            boxSizing: 'border-box'
          }}>
            <div style={{ flexGrow: 1 }}>
              <img 
                src={game.background_image} 
                alt={game.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h3 style={{ fontSize: '18px', margin: '10px 0 5px' }}>{game.name}</h3>
              <p style={{ margin: '0' }}>Released: {game.released}</p>
              <p style={{ margin: '0' }}>Rating: {game.rating}/5</p>
            </div>

            <button 
              onClick={() => addToCollection(game)}
              style={{
                padding: '8px',
                backgroundColor: '#2835a7ff',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                alignSelf: 'flex-end',
                marginTop: '10px'
              }}
            >
              add
            </button>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Collection
