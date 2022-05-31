import apiServices from "./services/services";

export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        getUsers: (state) => state.users
      },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        }
    },
    actions: {
        async getUsers({ commit }) {
            try {
                const data = await apiServices.getUsers()
                commit('SET_USERS', data.data)
               } catch (err) {
                 console.log(err);
                 this.$bvToast.toast("Error", {
                   title: `No pudimos recuperar la lista de usuarios, vuelve a intentarlo`,
                   variant: "danger",
                   solid: true,
                   noAutoHide: true,
                 });
               }

        }
    },
}