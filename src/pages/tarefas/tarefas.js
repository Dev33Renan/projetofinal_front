import React from 'react'
import './tarefas.scss';

const tarefas = () => {
    return (
        <section className="view">
            <div className="view-img">
            <img src="https://colegioideal.com.br/wp-content/themes/brave-ideal/img/tarefas-medio.svg" alt="imagemtarefa" width="200" height="300"/>
            </div>
            <div className="view-info">
                <p className="view-info-text">Titulo:</p>
                <p className="view-info-text">Descrição:</p>
                <p className="view-info-text">Prioridade:</p>
                <p className="view-info-text">Status:</p>
                <p className="view-info-text">Prazo:</p>
                <p className="view-info-text">Data de Criação:</p>
                <button className="btn btn-sucsess">Editar</button>
                <button className="btn btn-danger">Excluir</button>
            </div>
        </section>
    )
}

export default tarefas

