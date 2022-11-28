import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    users_data: [],
  },

  mutations: {
    INC(state, payload) {
      state.counter += payload.value;
    },
    INCR(state) {
      state.counter += 1;
    },
    DEC(state) {
      state.counter -= 1;
    },
    userData(state, payload) {
      state.users_data = payload;
    },
    errorMsg(state, payload) {
      state.error_msg = payload;
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getUsersData(state) {
      return state.users_data;
    },
    getErrorMsg(state) {
      return state.error_msg;
    },
  },
  actions: {},
  modules: {},
});
