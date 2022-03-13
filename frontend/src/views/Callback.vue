<template>
  <div>loading ...</div>
</template>

<script lang="ts">
import { RedirectRequestHandler, LocalStorageBackend, DefaultCrypto, AuthorizationNotifier, AuthorizationServiceConfiguration, FetchRequestor, BaseTokenRequestHandler, TokenRequest, GRANT_TYPE_AUTHORIZATION_CODE, BasicQueryStringUtils, LocationLike, StringMap } from '@openid/appauth';
import { Component, Vue } from 'vue-property-decorator';
import NoHashQueryStringUtils from '../login/no-hash-query';

@Component({ name: 'Callback' })
export default class Callback extends Vue {
  private async beforeCreate() {
    const authorizationHandler = new RedirectRequestHandler(
      new LocalStorageBackend(),
      new NoHashQueryStringUtils(),
      window.location,
      new DefaultCrypto(),
    );

    const notifier = new AuthorizationNotifier();
    notifier.setAuthorizationListener(async (request, response, error) => {
      const config = await AuthorizationServiceConfiguration.fetchFromIssuer('http://localhost:3002', new FetchRequestor());
      const tokenHandler = new BaseTokenRequestHandler(new FetchRequestor());
      const req = new TokenRequest({
        client_id: 'client_id_for_native',
        redirect_uri: 'http://localhost:8080/callback',
        grant_type: GRANT_TYPE_AUTHORIZATION_CODE,
        code: response?.code,
        extras: { code_verifier: request.internal!.code_verifier },
      });
      const res = await tokenHandler.performTokenRequest(config, req);
      this.$store.commit('auth/update', { username: res.idToken?.sub, accessToken: res.accessToken });
      this.$router.push({ name: 'todo/list' });
    });
    authorizationHandler.setAuthorizationNotifier(notifier);
    authorizationHandler.completeAuthorizationRequestIfPossible();
  }
}
</script>
