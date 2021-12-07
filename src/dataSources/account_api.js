const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class AccountAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async accountByUsernameRequest(username){
        return await this.get(`/accounts/${username}`);
    }

    async createAccount(accountData){
        return await this.post('/accounts/', accountData);
    }

    async createTransaction(transaction){
        return await this.post('/transaction/', transaction);
    }
    
    async createTransaction(username, account){
        return await this.post(`/transaction/${username}`, account);
    }

    async transactionByUsername(username){
        return await this.get(`/transactions/${username}`)
    }
    
    willSendRequest(request){
        request.headers.set('NOMBRE', 'valor')
    }
}

module.exports = AccountAPI;