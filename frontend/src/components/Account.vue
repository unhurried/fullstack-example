<template>
  <div v-if="isLogin">
    <b-navbar-nav class="ml-3">
    <font-awesome-icon id="account" icon="user-circle"
      style="color: white; font-size: 160%;" />
    </b-navbar-nav>
    <b-popover target="account" triggers="click blur" placement="bottom" title="Account">
      <b-container style="width: 150px;">
        <b-row class="text-center">
          <b-col><p>{{ username }}</p></b-col>
        </b-row>
        <b-row class="text-center">
          <b-col><b-button size="sm" variant="danger" @click="logout">Logout</b-button></b-col>
        </b-row>
      </b-container>
    </b-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Account',
  components: {},
})
export default class Account extends Vue {
  private get username(): string {
    return this.$store.state.auth.username;
  }
  private get isLogin(): boolean {
    return this.$store.getters['auth/isLogin'];
  }
  private async logout(): Promise<void> {
    await this.$store.dispatch('auth/logout');
    this.$router.push('/login');
  }
}
</script>

<style scoped>
:focus {
  outline: 0;
}
</style>
