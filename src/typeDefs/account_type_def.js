const { gql } = require('apollo-server');

const accountTypeDefs = gql` 
    type Account{
        username: String!
        balance: Int!
        lastChange: String
    }
    
    input AccountInput {
        balance: Int!
        lastChange: String
    }

    type Query{
        accountByUsername(username: String!): Account
        myAccount: Account
    }
    type Mutation{
        updateAccount(username: String, account: AccountInput): Account
    }
`;

module.exports = accountTypeDefs;