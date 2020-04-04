const env = require('../env/env')
const getModule = require('../env/get-modules');
exports = module.exports = getModule(env.getEntry(), env.getModule());