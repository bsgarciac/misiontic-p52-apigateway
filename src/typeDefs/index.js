const accountTypeDefs = require('./account_type_def');
const authTypeDefs = require('./auth_type_def');
const transactionTypeDefs = require('./transaction_type_def');

const schemasArray = [accountTypeDefs, authTypeDefs, transactionTypeDefs];

module.exports = schemasArray;