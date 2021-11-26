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
}

module.exports = AccountAPI;