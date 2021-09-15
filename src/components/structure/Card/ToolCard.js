import React from 'react'
import { Link } from 'react-router-dom';
import './ToolCard.scss';

const ToolCard = (props) => {
    const tarefa = props.tarefa;
    return (
        <Link to={`/tarefas/${tarefa._id}`}>
            <div>
                <p>{ tarefa._id }</p>
                <div className="card-img">
                    <img className="card-img" src='https://colegioideal.com.br/wp-content/themes/brave-ideal/img/tarefas-medio.svg' alt=""/>
                </div>  
                <p className="card-text">{tarefa.titulo}</p>
                <p className="card-text">{tarefa.descricao}</p>
                <span className="card-text">{tarefa.prioridade}</span>
                <span className="card-text">{tarefa.prazo}</span>
                <span className="card-text">{tarefa.datadecriacao}</span>
                            
            </div>
        </Link> 
    )   
}

export default ToolCard

