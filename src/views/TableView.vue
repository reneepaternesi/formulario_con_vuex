<template>
  <div class="form-view">
    <img alt="logo" src="logo.png" width="150" />
    <TableComponent :users="users" />
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TableView",
  async created() {
    await this.getUsers();
  },
  components: { TableComponent },
  methods: {
    addUser(user) {
      this.$emit("add-user", user);
    },
    ...mapActions(["getUsers"]),
  },
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style></style>
