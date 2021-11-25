const accountResolvers = {
    Query: {
        accountByUsername: async (_, { username }, {dataSources}) => {
            return await dataSources.accountAPI.accountByUsernameRequest(username);
        }
    }
};

module.exports = accountResolvers;
