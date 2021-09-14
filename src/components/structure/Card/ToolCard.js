import React from 'react'
import './ToolCard.scss';

const ToolCard = (props) => {
    const tarefa = props.tarefa;
    return (
        <>
        <div className="card">
            <div className="card-img">
                <img className="card-img" src={tarefa.titulo} alt=""/>
            </div>  
            <p className="card-text">{tarefa.descricao}</p>
            <span className="card-sinopse">{tarefa.prioridade}</span>
            <span className="card-video">{tarefa.prazo}</span>
            <span className="card-video">{tarefa.datadecriacao}</span>
                         
        </div>
        <div className="card">
            <div className="card-img">
               <img className="card-img" src={tarefa.titulo} alt=""/>
            </div>  
            <p className="card-text">{tarefa.descricao}</p>
            <span className="card-sinopse">{tarefa.prioridade}</span>
            <span className="card-video">{tarefa.prazo}</span>
            <span className="card-video">{tarefa.datadecriacao}</span> 
        </div>
        <div className="card">
            <div className="card-img">
                <img className="card-img" src={tarefa.titulo} alt=""/>
            </div>    
            <p className="card-text">{tarefa.descricao}</p>
            <span className="card-video">{tarefa.prazo}</span>
            <span className="card-video">{tarefa.datadecriacao}</span>
        </div>
        </>
    )   
}

export default ToolCard

