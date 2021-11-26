const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
const AccountAPI = require('./dataSources/account_api')
const AuthAPI = require('./dataSources/auth_api')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountAPI: new AccountAPI(),
        authAPI: new AuthAPI()
    }),
    introspection: true,
    playground: true
})


server.listen(process.env.PORT || 4000).then(({url})=>{
    console.log(`🚀 Server ready at ${url}`);
})