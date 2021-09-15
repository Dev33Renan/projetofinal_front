import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const header = () => {
    return (
        <header className="header">
           <div className="container">
                <ul className="header-list">
                    <Link to="/">
                    <li className="header-list-item">Home</li>
                    </Link>
                    <Link to="/add">                  
                    <li className="header-list-item">Adicionar</li>
                    </Link>
                    <Link to="/tarefas">
                    <li className="header-list-item">Tarefas</li>
                    </Link>
                </ul>
           </div>
        </header>
    )
}

export default header
