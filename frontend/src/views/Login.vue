<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
      <h2>Login</h2>
    </div>

    <b-button class="col-sm-4" type="button" variant="primary" @click="login()">
      Login with OpenID Connect
    </b-button>
    <b-alert v-if="errorMessage" show variant="danger">{{ errorMessage }}</b-alert>
 </div>
</template>

<script lang="ts">
import { AuthorizationServiceConfiguration, FetchRequestor, AuthorizationRequest, RedirectRequestHandler, LocalStorageBackend, DefaultCrypto, BasicQueryStringUtils, LocationLike, StringMap } from '@openid/appauth';
import { Component, Vue } from 'vue-property-decorator';
import NoHashQueryStringUtils from '../login/no-hash-query';

@Component({ name: 'Login' })
export default class Login extends Vue {
  private errorMessage: string | null = null;

  private async login() {
    try {
      const config = await AuthorizationServiceConfiguration.fetchFromIssuer('http://localhost:3002', new FetchRequestor());
      const authRequest = new AuthorizationRequest({
        client_id: 'client_id_for_vue',
        redirect_uri: 'http://localhost:8080/callback',
        scope: 'openid todo',
        response_type: AuthorizationRequest.RESPONSE_TYPE_CODE,
        extras: { prompt: 'consent', resource: 'http://localhost:3001/todos' },
      });
      const authorizationHandler = new RedirectRequestHandler(
        new LocalStorageBackend(),
        new NoHashQueryStringUtils(),
        window.location,
        new DefaultCrypto(),
      );
      authorizationHandler.performAuthorizationRequest(config, authRequest);
    } catch (e) {
      this.errorMessage = 'Something wrong happend with the login process.';
    }
  }
}
</script>
