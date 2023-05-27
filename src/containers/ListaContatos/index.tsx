import React from 'react';
import { useSelector } from 'react-redux';


import { ListagemContato } from './styles';
import { RootReducer } from '../../store';
import Contato from '../../componentes/Contato';
import { useNavigate } from 'react-router-dom';
import { BotaoAdicionar } from '../../styles';


const ListaContato: React.FC = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos);

    const navigate = useNavigate()


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
                <BotaoAdicionar onClick={() => navigate('/Formulario')}>NOVO</BotaoAdicionar>
            </ListagemContato>
        </>
    );
};

export default ListaContato;