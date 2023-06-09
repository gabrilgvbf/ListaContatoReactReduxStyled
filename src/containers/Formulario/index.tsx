import { useDispatch } from "react-redux";
import { BotaoLista } from "../../styles";
import { PainelAdicionar } from "./styles";
import { adicionar } from "../../store/reducers/contato";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioContato = () => {
    const dispatch = useDispatch();
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState<number>(0);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const navigate = useNavigate()

    const CadastrarContato = (evento: FormEvent) => {
        evento.preventDefault();
        dispatch(
            adicionar({
                nome,
                numero,
                email,
                id,
            })
        )

        setSubmitSuccess(true)

        setNome("")
        setNumero("")
        setEmail("")

        setTimeout(() => setSubmitSuccess(false), 1000)

    }

    return (
        <PainelAdicionar>
            <h1>Register Contact </h1>
            <form onSubmit={CadastrarContato}>
                <label htmlFor="nome">Nome :</label>
                <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label htmlFor="numero">Cel :</label>
                <input
                    id="numero"
                    type="number"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />

                <label htmlFor="email">Email :</label>
                <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />



                {submitSuccess ? <button type="submit" className={submitSuccess ? 'submit-success' : ''}>Contato Adicionado</button> :
                    <button type="submit" className={submitSuccess ? 'submit-success' : ''}>Adicionar</button>}

            </form>

            <BotaoLista onClick={() => navigate('/')}>LISTA</BotaoLista>
        </PainelAdicionar>
    );
};

export default FormularioContato;