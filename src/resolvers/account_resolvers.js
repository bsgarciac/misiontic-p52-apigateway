const accountResolvers = {
    Query: {
        accountByUsername: async (_, { username }, {dataSources, usernameToken}) => {
            if(username == usernameToken){
                return await dataSources.accountAPI.accountByUsernameRequest(username);
            }else{
                return null
            }
        },
        myAccount: async (_, {}, {dataSources, usernameToken}) => {
            if(usernameToken == null){
                return null;
            }else{
                return await dataSources.accountAPI.accountByUsernameRequest(usernameToken)
            }
        }
    }
};

module.exports = accountResolvers;
