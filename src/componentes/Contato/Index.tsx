
import { ContatoForm } from "./styles";
import ContatoClass from "../../models/Contato"
import { Editar, remover } from "../../store/reducers/contatos";
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
type Props = ContatoClass
const Contato = ({ nome: nomeOriginal, numero: numeroOriginal, email: emailOriginal, id }: Props) => {

    const [nome, Setnome] = useState('')
    const [numero, Setnumero] = useState('')
    const [email, Setemail] = useState('')

    const dispatch = useDispatch()
    const [EstaEditanto, SetEstaEditando] = useState(false)
    const RemoverContato = () => {
        dispatch(remover(id))
    }
    const ContatoEditado = () => {
        dispatch(Editar({
            nome,
            numero,
            email,
            id
        }))


    }
    useEffect(() => {
        if (nomeOriginal.length > 0)
            Setnome(nomeOriginal)
        Setnumero(numeroOriginal)
        Setemail(emailOriginal)
    }, [nomeOriginal, numeroOriginal, emailOriginal])

    const handleEditarContato = (event: React.FormEvent) => {
        event.preventDefault();



        SetEstaEditando(EstaEditanto);

    };


    const handleCancelaEdicao = (event: React.FormEvent) => {
        event.preventDefault();

        SetEstaEditando(false);
        ContatoEditado();
    };



    return (
        <ContatoForm onSubmit={handleEditarContato}>
            <ul>
                <li><input type="text" disabled={!EstaEditanto} value={nome} onChange={evento => Setnome(evento.target.value)} /></li>
                <li><input type="number" disabled={!EstaEditanto} value={numero} onChange={evento => Setnumero(evento.target.value)} /></li>
                <li><input type="email" disabled={!EstaEditanto} value={email} onChange={evento => Setemail(evento.target.value)} /></li>
            </ul>
            <button onClick={RemoverContato}>Remover</button>
            {!EstaEditanto ?
                <button type="submit" onClick={() => SetEstaEditando(true)}>Editar</button>
                : <button type="submit" onClick={handleCancelaEdicao}>Cancelar</button>}

        </ContatoForm >

    )
}

export default Contato;