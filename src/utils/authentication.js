const fetch = require('node-fetch');
const serverConfig = require('../server')
const { ApolloError } = require('apollo-server');


const authentication = async ({ req }) => {
    const token = req.header.authorization || '';
    if(token == ''){
        return { usernameToken: null}
    }else{
        try{
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" ,
                    "Authorization": "token " + token
                },
                redirect: "follow"
            }
            let response = await fetch(`${serverConfig.auth_api_url}soporte/user`, requestOptions);
            if(response.status != 200){
                console.log(response)
                throw new ApolloError("Token invalido", 401)
            }
            return { usernameToken: response.json().username};
        }catch(error){
            console.log(error)
            throw new ApolloError("Error inesperado", 500)
        }
    }
}

module.exports = authentication;