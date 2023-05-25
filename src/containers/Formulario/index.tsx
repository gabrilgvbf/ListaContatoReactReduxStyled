import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BotaoAdicionar from '../../components/Botoes/IrFormulario';
import Contato from '../../components/Contato';
import { ListagemContato } from './styled';
import { RootReducer } from '../../store';
import { remover } from '../../store/reducers/contatos';

const ListaContato: React.FC = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos);
    const dispatch = useDispatch();

    const removerContato = (id: number) => {
        dispatch(remover(id));
    };

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
                            onRemover={() => removerContato(contato.id)}
                        />
                    </li>
                ))}
                <BotaoAdicionar />
            </ListagemContato>
        </>
    );
};

export default ListaContato;