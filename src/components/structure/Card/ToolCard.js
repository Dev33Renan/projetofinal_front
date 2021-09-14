import React from 'react'
import './ToolCard.scss';

const ToolCard = () => {
    return (
        <>
        <div className="card">
            <div className="card-img">
                <img className="card-img" src='https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/280px-Super-Mario-World.jpg' alt=""/>
            </div>  
            <p className="card-text">Teste Card</p>
            <span className="card-sinopse">Teste Card</span>
            <span className="card-video">Url do Video vai aqui</span>
             
        </div>
        <div className="card">
            <div className="card-img">
                <img className="card-img" src='https://upload.wikimedia.org/wikipedia/pt/7/7b/Super_Mario_64_front.jpg' alt=""/>
            </div>  
            <p className="card-text">Teste Card</p>
            <span className="card-sinopse">Teste Card</span>
            <span className="card-video">Url do Video vai aqui</span>
             
        </div>
        <div className="card">
            <div className="card-img">
                <img className="card-img" src='https://i.imgur.com/T1Bur0p.png' alt=""/>
            </div>  
            <p className="card-text">Teste Card</p>
            <span className="card-sinopse">Teste Card</span>
            <span className="card-video">Url do Video vai aqui</span>
             
        </div>
        </>
    )   
}

export default ToolCard

