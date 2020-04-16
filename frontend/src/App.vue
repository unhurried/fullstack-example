<template>
  <div>
    <!-- <nav class="navbar navbar-dark bg-dark"> -->
    <b-navbar type="dark" variant="dark" toggleable="lg">
      <!-- <a class="navbar-brand" href="#">ToDo Management System</a> -->
      <b-navbar-brand to="/" class="mr-auto">ToDo Management System</b-navbar-brand>

      <!-- <button class="navbar-toggler d-md-none" type="button"
        data-toggle="collapse" data-target="#menu"> -->
      <!-- b-navbar-toggle only covers a b-collapse element under the parent b-navbar -->
      <b-button class="navbar-toggler d-md-none" v-b-toggle.menu>
        <span class="navbar-toggler-icon"></span>
      </b-button>
      <Account />
    </b-navbar>

    <!-- <div class="container-fluid" style="max-width:1024px; margin-left:0;"> -->
    <b-container fluid style="max-width:1024px; margin-left:0;">
      <!-- <div class="row"> -->
      <b-row>
        <!-- <div class="col-md-3 navbar collapse
          d-md-block bg-light align-items-start sidebar" id="menu">-->
        <b-collapse
          class="col-md-3 navbar
          d-md-block bg-light align-items-start sidebar" id="menu">
          <!-- <ul class="nav flex-column"> -->
          <b-nav class="flex-column">
            <!-- <li class="nav-item">
                   <router-link class="nav-link" to="/">List</router-link>
                 </li> -->
            <b-nav-item to="/">List</b-nav-item>
            <b-nav-item to="/create">New Item</b-nav-item>
          </b-nav>
        </b-collapse>
        <!-- <div class="col m-3"> -->
        <b-col class="m-3">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Account from '@/components/Account.vue';

@Component({
  name: 'App',
  components: { Account },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  /* Set the height of sidebar to fit to the viewport height. */
  @media (min-width: 768px) {
    .sidebar {
      min-height: calc(100vh - 56px);
      overflow: hidden;
    }
  }
</style>
