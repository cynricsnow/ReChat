const development = require('./development');

module.exports = {
    development: development
}[process.env.NODE_ENV || 'development'];
