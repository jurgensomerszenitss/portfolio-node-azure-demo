const sql = require('mssql');
const { getConnectionString } = require('./keyvault');

exports.connect = async () => {
    const connection = await getConnectionString();
    console.log(connection);
    await sql.connect(connection); 
}

