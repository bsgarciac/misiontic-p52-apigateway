const authResolver = {
    Mutation: {
        login: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.loginRequest(credentials);
        },
        signUp: async (_, { signupData }, { dataSources }) => {
            // Creating Account
            const accountData = {
                username: signupData.username,
                balance: signupData.balance,
                lastChange: (new Date()).toISOString()
            }
            await dataSources.accountAPI.createAccount(accountData);
            // Creating User
            const userData = {
                username: signupData.username,
                password1: signupData.password1,
                password2: signupData.password2
            }
            return await dataSources.authAPI.createUser(userData);
        }
    }
}

module.exports = authResolver;