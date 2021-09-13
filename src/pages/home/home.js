import React from 'react'
import GameList from '../../components/structure/GameList/GameList';
import './home.scss';

const home = () => {
    return (
        <section className="content">

            <h1 className="content-title">Catalogo de Games</h1>
            <div className="content-list">
              <GameList />
              
            </div>


        </section>
         
        
    )
}
export  default home