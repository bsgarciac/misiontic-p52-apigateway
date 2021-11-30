const transactionResolver = {
    Query: {
        transactionByUsername: async (_, {username}, {dataSources}) => {
            return await dataSources.account_api.transactionByUsername(username);
        }
    },
    Mutation: {
        createTransaction: async (_, {transaction}, {dataSources}) => {
            return await dataSources.account_api.createTransaction(transaction);
        }
    }
}

module.exports = transactionResolver;