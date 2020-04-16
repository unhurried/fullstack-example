import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import AuthModule from './modules/auth';
import { RootState } from './type';

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    auth: AuthModule,
  },
};

Vue.use(Vuex);
export default new Vuex.Store<RootState>(store);
