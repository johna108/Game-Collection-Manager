import React from 'react'
import { useGames } from './GameContext'

const Mycollection = () => {
  const { myCollection, removeFromCollection } = useGames()

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>My Game Collection</h1>
      {myCollection.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No games added yet!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {myCollection.map(game => (
            <div key={game.id} style={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <img 
                  src={game.background_image} 
                  alt={game.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <h3>{game.name}</h3>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating}/5</p>
              </div>
              <button 
                onClick={() => removeFromCollection(game.id)}
                style={{
                  padding: '8px',
                  backgroundColor: '#2835a7ff',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Mycollection
