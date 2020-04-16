<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
      <h2>Login</h2>
    </div>

    <b-alert v-if="errorMessage" show variant="danger">{{ errorMessage }}</b-alert>

    <ValidationObserver ref="observer" v-slot="{ invalid, passes }">
      <b-form novalidate @submit.prevent="passes(onSubmit)">
        <ValidationProvider
          name="username"
          rules="required|min:8|max:32"
          v-slot="{ errors, valid, validated }"
        >
          <b-form-group label-cols-sm="3" label="Username" label-for="username">
            <b-form-input v-model="username" type="text" :state="validated ? valid : null" />
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          name="password"
          rules="required|min:8|max:32"
          v-slot="{ errors, valid, validated }"
        >
          <b-form-group label-cols-sm="3" label="Password" label-for="password">
            <b-form-input v-model="password" type="password" :state="validated ? valid : null" />
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-form-group>
          <b-row class="justify-content-center">
            <b-button class="col-sm-4" type="submit" variant="primary">Login</b-button>
          </b-row>
        </b-form-group>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Login',
  components: {},
})
export default class Login extends Vue {
  private errorMessage: string | null = null;
  private username: string = '';
  private password: string = '';

  private async onSubmit() {
    try {
      await this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      });
      this.$router.push('/');
    } catch (e) {
      this.errorMessage = 'Invalid username and password.';
    }
  }
}
</script>
