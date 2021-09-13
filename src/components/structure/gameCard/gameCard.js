import React from 'react'
import './GameCard.scss';

const GameCard = () => {
    return (
        <div className="card">
          <div className="card-img">
            <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/280px-Super-Mario-World.jpg" alt=""/>
          </div>  
            <p className="card-text">Teste Card</p>
            <span className="card-sinopse">Teste Card</span>
            <span className="card-video">Url do Video vai aqui</span>
        </div>
    )
}

export default GameCard
