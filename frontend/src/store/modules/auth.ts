import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';
import { Configuration, TodoApi } from '@/client-axios';
import { AuthState, RootState } from '../type';

const getters: GetterTree<AuthState, RootState> = {
  isLogin: (state) => state.accessToken !== '',
};

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
  getApi: async ({ state }) => new TodoApi(
    // TODO Externalize base URI for API
    new Configuration({
      basePath: 'http://localhost:3001',
      accessToken: state.accessToken,
    }),
  ),
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
