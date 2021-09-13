import React from 'react'
import gameList from '../../components/structure/gameList/gameList';
import './home.scss';

const home = () => {
    return (
        <section className="content">

            <h1 className="content-title">Catalogo de Games</h1>
            <div className="content-list">
                <gameList />

            </div>


        </section>
         
        
    )
}
export  default home