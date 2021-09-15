import React from 'react'
import ToolList from '../../components/structure/ToolList/ToolList';
import './home.scss';

const home = () => {
    return (
        <section className="content">

            <h1 className="content-title">Home tarefas</h1>
            <div className="content-list">
              <ToolList />
              
            </div>


        </section>
         
        
    )
}
export  default home