import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

interface State {
  selectedSurveyId: number | null;
  token: string | null;
  apiUrl: string; 
}

const store = createStore<State>({
  state: {
    selectedSurveyId: null,
    token: null,
    apiUrl: `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}` 
  },
  mutations: {
    updateSelectedSurveyId(state, newValue: number) {
      state.selectedSurveyId = newValue;
    },
    updateToken(state, newToken: string) {
      state.token = newToken;
    },
  },
  actions: {
    updateSelectedSurveyId({ commit }, newValue: number) {
      commit('updateSelectedSurveyId', newValue);
    },
    updateToken({ commit }, newToken: string) {
      commit('updateToken', newToken);
    }
  },
  getters: {
    getSelectedSurveyId: (state) => {
      return state.selectedSurveyId;
    },
    getToken: (state) => {
      return state.token;
    },
    getApiUrl: (state) => {
      return state.apiUrl;
    }
  },
  plugins: [createPersistedState()]
});

export default store;