const BearerStrategy = require('passport-azure-ad').BearerStrategy;  
const env = require('./config');
 

const clientID = env.CLIENT_ID;
const domainHost = env.DOMAIN_HOST;
const tenantId = env.TENANT_ID ; // Alternatively, you can use your Directory (tenant) ID (a GUID)
const policyName = env.POLICY;

const config = {
    identityMetadata: "https://" + domainHost + "/" + tenantId + "/v2.0/.well-known/openid-configuration/",
    clientID: clientID 
}
 

const bearerStrategy = new BearerStrategy(config,
    function (token, done) { 
        done(null, {}, token);
    }
);

module.exports = bearerStrategy;