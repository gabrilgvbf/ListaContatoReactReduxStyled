import React from 'react';
import { useSelector } from 'react-redux';
import BotaoAdicionar from '../../styles';

import { ListagemContato } from './styles';
import { RootReducer } from '../../store';

import Contato from '../../componentes/Contato/Index';

const ListaContato: React.FC = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos);




    return (
        <>
            <ListagemContato>
                <h1>My Contacts</h1>
                {itens.map((contato) => (
                    <li key={contato.id}>
                        <Contato
                            nome={contato.nome}
                            numero={contato.numero}
                            email={contato.email}
                            id={contato.id}
                        />
                    </li>
                ))}
                <BotaoAdicionar />
            </ListagemContato>
        </>
    );
};

export default ListaContato;