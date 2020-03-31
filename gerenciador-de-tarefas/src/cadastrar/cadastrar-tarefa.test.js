import React from "react";
import ReacDOM from 'react-dom';
import CadastrarTarefa from "./cadastrar-tarefa";

describe('Teste do componente de cadastro de tarefas', () => {
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReacDOM.render(<CadastrarTarefa/>, div);
        ReacDOM.unmountComponentAtNode(div);
    });
});
