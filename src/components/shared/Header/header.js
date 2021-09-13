import React from 'react';
import './header.scss';

const header = () => {
    return (
        <header className="header">
            <ul className="header-list">
                <a href="/">
                <li className="header-list-item">Home</li>
                </a>
                <a href="/gameadd">
                <li className="header-list-item">Adicionar</li>
                </a>
                <a href="/tarefas">
                <li className="header-list-item">Tarefas</li>
                </a>
            </ul>
        </header>
    )
}

export default header
