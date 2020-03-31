import React from 'react';
import { A } from 'hookrouter';

function ListarTarefas() {
    return(
        <A href="/cadastrar" className="btn btn-success" >
            Nova tarefa
        </A>
    );
}

export default ListarTarefas;
