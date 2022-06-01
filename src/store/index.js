import Vue from "vue";
import Vuex from 'vuex';
import apiServices from "../services/services";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        users: []
    },
    getters: {
        users: state => state.users,
      },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        }
    },
    actions: {
        getUsers: ({ commit }) => {
          apiServices.getUsers()
            .then(users => commit('SET_USERS', users))
            .catch(err => console.log(err))
        }
      }
})