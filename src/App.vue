<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Lista de Usuarios</router-link> |
      <router-link to="/create-user">Crear Usuario</router-link>
    </nav>
    <router-view :users="users" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  async created() {
    await this.getUsers();
  },
  methods: {
    addUser(user) {
      this.users.push({
        ...user,
      });
    },
    ...mapActions("users", ["getUsers"]),
  },
  computed: {
    ...mapState("users", {
      users: "users",
    }),
  },
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Lora&family=Raleway:wght@100&display=swap");
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
:root {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}

#app {
  font-family: "Hind Siliguri", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>
