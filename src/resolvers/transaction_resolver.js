const transactionResolver = {
    Query: {
        transactionByUsername: async (_, {username}, {dataSources, usernameToken}) => {
            if(username == usernameToken){
                return await dataSources.accountAPI.transactionByUsername(username);
            }else{
                return null
            }
        }
    },
    Mutation: {
        createTransaction: async (_, {transaction}, {dataSources}) => {
            return await dataSources.accountAPI.createTransaction(transaction);
        }
    }
}

module.exports = transactionResolver;