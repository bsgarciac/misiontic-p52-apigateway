const accountResolver = require('./account_resolvers');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver);

module.exports = resolvers;