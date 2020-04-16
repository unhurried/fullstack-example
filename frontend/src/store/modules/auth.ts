import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';
import { Configuration, AuthApi, TodoApi } from '@/client-axios';
import { AuthState, RootState } from '../type';

const getters: GetterTree<AuthState, RootState> = {
  // isLogin: (state) => state.accessToken !== '',
  isLogin: (state) => state.accessToken !== '',
};

/* eslint no-param-reassign: 0 */
const mutations: MutationTree<AuthState> = {
  update: (state: AuthState, data: AuthState) => {
    state.username = data.username;
    state.accessToken = data.accessToken;
  },
  destroy: (state: AuthState) => {
    state.accessToken = '';
  },
};

const actions: ActionTree<AuthState, RootState> = {
  login: async ({ commit }, payload: any) => {
    const api = new AuthApi(
      // TODO Externalize basePath for Login API
      new Configuration({ basePath: 'http://localhost:3000' }),
    );
    const result = await api.authControllerLogin(payload);
    commit('update', { username: payload.username, accessToken: result.data.accessToken });
  },
  getApi: async ({ state }) => new TodoApi({
    // TODO Externalize base URI for API
    basePath: 'http://localhost:3000',
    accessToken: state.accessToken,
  }),
  logout: ({ commit }, payload: any) => {
    commit('destroy');
  },
};

const AuthModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    username: '',
    accessToken: '',
  },
  getters,
  mutations,
  actions,
  modules: {},
};
export default AuthModule;
