import React, { useState } from 'react'
import ToolCard from '../Card/ToolCard';
import './ToolList.scss'



const ToolList = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        getTarefa();    
    }, [])

    const url = 'http://localhost:3000/tarefas';

    const getTarefa = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(response);
        console.log(data);
        setTarefas(data);
    }

    return (
        <div className="list">
            {tarefas.map((tarefa, index)  => ( 
                <ToolCard tarefa={tarefa} key={tarefa._id}/>
            ))}
        </div>
    )
}

export default ToolList
