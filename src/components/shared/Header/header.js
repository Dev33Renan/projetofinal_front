import React from 'react';
import './header.scss';

const header = () => {
    return (
        <header className="header">
           <div className="container">
                <ul className="header-list">
                    <a href="/" className="header-list-item">
                    <li>Home</li>
                    </a>
                    <a href="/add" className="header-list-item">
                    <li>Adicionar</li>
                    </a>
                    <a href="/tarefas" className="header-list-item">
                    <li>Tarefas</li>
                    </a>
                </ul>
           </div>
        </header>
    )
}

export default header
