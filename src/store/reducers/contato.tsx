import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: "Gabriel Viana",
            numero: "27996144892",
            email: "gabrilgvbf@gmail.com"
        }
    ]
}

const contatosSlice = createSlice({
    name: "contatos",
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Contato>) => {
            const novoContato = {
                ...action.payload,
                id: state.itens.length + 1, // Gera um novo ID incrementando o tamanho da array de contatos
            };
            state.itens.push(novoContato);
        },
        remover: (state, action: PayloadAction<number>) => {
            const idContatoRemover = action.payload
            state.itens = state.itens.filter((contato) => contato.id !== idContatoRemover)

        }, editar: (state, action: PayloadAction<Contato>) => {
            const contatoEditado = action.payload

            state.itens = state.itens.map((contato) => {
                if (contato.id === contatoEditado.id) {
                    return contatoEditado
                }
                return contato
            })
        }

    }


})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer