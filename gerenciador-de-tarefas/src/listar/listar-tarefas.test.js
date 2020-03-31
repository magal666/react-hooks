import React from "react";
import ReacDOM from 'react-dom';
import ListarTarefas from "./listar-tarefas";

describe('Teste do componente de listagem de tarefas', () => {
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReacDOM.render(<ListarTarefas/>, div);
        ReacDOM.unmountComponentAtNode(div);
    });
});
