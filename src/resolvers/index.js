const accountResolver = require('./account_resolvers');
const authResolver = require('./auth_resolvers');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, authResolver);

module.exports = resolvers;