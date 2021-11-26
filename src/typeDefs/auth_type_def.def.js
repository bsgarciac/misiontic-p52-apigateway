const { gql } = require('apollo-server');


const authTypeDefs = gql`
    input LoginInput {
        username: String!
        password: String!
    }

    type Token {
        key: String!
    }

    type Mutation{
        login(credentials: LoginInput!): Token!
    }
`;

module.exports = authTypeDefs;