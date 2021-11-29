import { useState } from 'react';
import useLocalStorage from "use-local-storage";

function UseData() {
    const [tokenStorage, setTokenStorage, removeTokenStorage] = useLocalStorage("token")
    const [stage, setStage] = useState({ one: true, two: false, three: false })
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [inputError, setInputError] = useState(true)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [inputValueCadastroNome, setInputValueCadastroNome] = useState('')
    const [inputValueCadastroEmail, setInputValueCadastroEmail] = useState('')
    const [erro, setErro] = useState(false)
    const [visualizarSenha, setVisualizarSenha] = useState(false)
    const [visualizarSenhaRepeat, setVisualizarSenhaRepeat] = useState(false)
    const [inputErrorValidate, setInputErrorValidate] = useState(true)

    const handleVisualizarSenha = () => {
        visualizarSenha ? setVisualizarSenha(false) : setVisualizarSenha(true)
    }
    const handleVisualizarSenhaRepeat = () => {
        visualizarSenhaRepeat ? setVisualizarSenhaRepeat(false) : setVisualizarSenhaRepeat(true)
    }
    const handleValidadeCampos = () => {
        if (inputValueCadastroNome && inputValueCadastroEmail) {
            setInputErrorValidate(true)
            setStage({ one: true, two: true, three: false })
        }
        setInputErrorValidate(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordRepeat) {
            setInputError(false)
            return
        }
        setInputError(true)
        setTimeout(() => {
            setStage({ one: true, two: true, three: true })
        }, 3000)
    }

    return {
        email,
        setEmail,
        senha,
        setSenha,
        tokenStorage,
        setTokenStorage,
        removeTokenStorage,
        stage,
        setStage,
        password,
        passwordRepeat,
        inputError,
        setPassword,
        setPasswordRepeat,
        setInputError,
        inputValueCadastroNome,
        setInputValueCadastroNome,
        inputValueCadastroEmail,
        setInputValueCadastroEmail,
        erro,
        setErro,
        handleVisualizarSenha,
        handleVisualizarSenhaRepeat,
        handleValidadeCampos,
        visualizarSenha,
        setVisualizarSenha,
        visualizarSenhaRepeat,
        setVisualizarSenhaRepeat,
        inputErrorValidate,
        setInputErrorValidate,
        handleSubmit
    }
}

export default UseData;