import { Provider, Configuration } from 'oidc-provider'

const configuration: Configuration = {
  clients: [{
    client_id: 'client_id_for_frontend',
    client_secret: 'client_secret_for_frontend',
    scope: 'openid offline_access todo',
    grant_types: ['authorization_code', 'refresh_token'],
    redirect_uris: ['http://localhost:3000/api/auth/callback/oidc'],
  }],
  scopes: ['openid', 'offline_access', 'todo'],
  features: {
    introspection: { enabled: true },
    resourceIndicators: {
      enabled: true,
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
};

const port = process.env.PORT || 3002
const oidc = new Provider(`http://localhost:${port}`, configuration)
oidc.listen(port, () => {
  console.log(`oidc-provider listening on port ${port}.`)
})
