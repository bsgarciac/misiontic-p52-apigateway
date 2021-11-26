const authResolver = {
    Mutation: {
        login: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.loginRequest(credentials);
        }
    }
}

module.exports = authResolver;