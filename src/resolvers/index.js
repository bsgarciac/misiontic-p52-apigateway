const accountResolver = require('./account_resolvers');
const authResolver = require('./auth_resolvers');
const transactionResolver = require('./transaction_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, authResolver, transactionResolver);

module.exports = resolvers;