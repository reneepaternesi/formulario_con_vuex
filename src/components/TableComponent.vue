<template>
  <b-container class="table-container">
    <b-table striped hover :items="getLocalUsers()"></b-table>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TableComponent",
  async created() {
    await this.getUsers();
  },
  methods: {
    ...mapActions(["getUsers"]),
    getLocalUsers() {
      const localUsers = JSON.parse(JSON.stringify(this.users));
      localUsers.forEach((element) => {
        delete element.password;
      });
      return localUsers;
    },
  },
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style scopes lag="less">
.table-container {
  margin-top: 100px;
}
</style>
