import { configureStore } from '@reduxjs/toolkit'
import ContatoReducer from './reducers/contato'


const store = configureStore({
    reducer: {
        contatos: ContatoReducer,

    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store