const config = {
    PORT : 3000,
    CLIENT_ID : '#{CLIENT_ID}#',
    CLIENT_SECRET : '#{CLIENT_SECRET}#',
    DOMAIN_HOST : '#{DOMAIN_HOST}#',
    TENANT_ID : '#{TENANT_ID}#',
    POLICY : '#{POLICY}#',
    KEYVAULT_URL: '#{KEYVAULT_URL}#',
    SECRET_DB_CONNECTION : '#{KEYVAULT_DBCONNECTION}#',
} 

/* Enable below for running local */

// const config = {
//     PORT : 3200,
//     CLIENT_ID : '2eb44e3d-6e68-4a77-9e7d-ae045182d3ef',
//     CLIENT_SECRET : 'LsBq9FJT1.No.Ou~d33Y6k9K-yeO_n0GB3',
//     DOMAIN_HOST : 'login.microsoftonline.com',
//     TENANT_ID : '12a3af23-a769-4654-847f-958f3d479f4a',
//     POLICY : '',
//     KEYVAULT_URL: 'https://kv-ibotauth.vault.azure.net/',
//     SECRET_DB_CONNECTION : 'dbconnection',
// }  
 
module.exports = config;