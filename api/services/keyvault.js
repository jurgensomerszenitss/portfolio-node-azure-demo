const { ClientSecretCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const cfg = require('../config');

exports.getConnectionString = async () => {
    const credential = new ClientSecretCredential(cfg.TENANT_ID, cfg.CLIENT_ID, cfg.CLIENT_SECRET);
    const client = new SecretClient(cfg.KEYVAULT_URL, credential); 

    const connectionString = await client.getSecret(cfg.SECRET_DB_CONNECTION);
    return connectionString.value;
}