import { Provider, Configuration } from 'oidc-provider'

const configuration: Configuration = {
  clients: [
    {
      client_id: 'client_id_for_frontend',
      client_secret: 'client_secret_for_frontend',
      scope: 'openid offline_access todo',
      grant_types: ['authorization_code', 'refresh_token'],
      redirect_uris: ['http://localhost:3000/api/auth/callback/oidc', 'http://localhost:8080/callback'],
    },
    {
      application_type: 'native',
      token_endpoint_auth_method: 'none',
      client_id: 'client_id_for_vue',
      scope: 'openid offline_access todo',
      grant_types: ['authorization_code', 'refresh_token'],
      redirect_uris: ['http://localhost:8080/callback'],
    },
  ],
  scopes: ['openid', 'offline_access', 'todo'],
  features: {
    resourceIndicators: {
      enabled: true,
      useGrantedResource: () => { return true }, // allow clients to omit "resource" parameter in Token endpoint.
      getResourceServerInfo: async (ctx, resourceIndicator, client) => {
        if (client.scope && client.scope.split(' ').includes('todo')) {
          return {
            scope: 'todo',
            audience: 'todo-api',
            accessTokenFormat: 'jwt',
            jwt: { sign: { alg: 'RS256' } },
          }
        }
      },
    },
  },
  clientBasedCORS: () => { return true }
};

const port = process.env.PORT || 3002
const oidc = new Provider(`http://localhost:${port}`, configuration)
oidc.listen(port, () => {
  console.log(`oidc-provider listening on port ${port}.`)
})
