// import jwt from 'jsonwebtoken'
// import useConsumer from './useConsumer'
require('dotenv').config()

function useFunctions() {
    // const { tokenStorage, setTokenStorage, email, senha } = useConsumer()

    function signIn() {
        // const usuario = {
        //     email,
        //     senha
        // }
        // const user = jwt.sign(usuario, process.env.JWT_SECURE)
        // console.log(process.env.JWT_SECURE)
    }

    return {
        signIn
    }
}

export default useFunctions