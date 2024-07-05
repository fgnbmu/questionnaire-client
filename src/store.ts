import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

interface State {
  selectedSurveyId: number | null;
  token: string | null;
  apiUrl: string; 
  startDate: string | null;
  expirationDate: string | null;
  status: string; // Добавляем переменную для хранения статуса опроса
  selectedFaculties: number[];
}

const store = createStore<State>({
  state: {
    selectedSurveyId: null,
    token: null,
    apiUrl: `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`,
    startDate: null, // Добавляем переменные для хранения даты начала и конца опроса
    expirationDate: null,  
    status: 'не опубликован', // Добавляем значение по умолчанию для статуса опроса,
    selectedFaculties: []
  },
  mutations: {
    updateSelectedSurveyId(state, newValue: number) {
      state.selectedSurveyId = newValue;
    },
    updateToken(state, newToken: string) {
      state.token = newToken;
    },
    updateStartDate(state, newDate: string) {
      state.startDate = newDate;
    },
    updateExpirationDate(state, newDate: string) {
      state.expirationDate = newDate;
    },
    updateStatus(state, newStatus: string) {
      state.status = newStatus;
    },
    updateSelectedFaculties(state, faculties: number[]) {
      state.selectedFaculties = faculties;
    }
  },
  actions: {
    updateSelectedSurveyId({ commit }, newValue: number) {
      commit('updateSelectedSurveyId', newValue);
    },
    updateToken({ commit }, newToken: string) {
      commit('updateToken', newToken);
    },
    updateStartDate({ commit }, newStartDate: string) {
      commit('updateStartDate', newStartDate);
    },
    updateExpirationDate({ commit }, newExpirationDate: string) {
      commit('updateExpirationDate', newExpirationDate);
    },
    updateStatus({ commit }, newStatus: string) {
      commit('updateStatus', newStatus);
    },
    updateSelectedFaculties({ commit }, faculties: number[]) {
      commit('updateSelectedFaculties', faculties);
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
    },
    getStartDate: (state) => {
      return state.startDate;
    },
    getExpirationDate: (state) => {
      return state.expirationDate;
    },
    getStatus: (state) => {
      return state.status;
    },
    getSelectedFaculties: (state) => {
      return state.selectedFaculties;
    }
  },
  plugins: [createPersistedState()]
});

export default store;