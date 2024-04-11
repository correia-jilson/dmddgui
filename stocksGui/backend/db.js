const sql = require('mssql');

const config = {
  user: 'Jilson',
  password: 'JilCor_pass@2103',
  server: 'JilsonPC', // e.g., 'localhost\\instance'
  database: 'stockinfo',
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

async function getConnection() {
  try {
    await sql.connect(config);
    return sql;
  } catch (err) {
    console.error('SQL Database Connection Error: ', err);
  }
}

module.exports = getConnection;
