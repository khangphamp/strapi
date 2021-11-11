const parse = require('pg-connection-string').parse;
const config = parse('postgresql://postgres:UMotxGDDCJxeTkjYpOFG@containers-us-west-17.railway.app:6166/railway');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'containers-us-west-17.railway.app',
        port: '6166',
        database: 'railway',
        username: 'postgres',
        password: 'UMotxGDDCJxeTkjYpOFG',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
