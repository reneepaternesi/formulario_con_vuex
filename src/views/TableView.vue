<template>
  <div class="form-view">
    <img alt="logo" src="logo.png" width="150" />
    <TableComponent :users="users" />
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";

export default {
  name: "TableView",
  props: {
    users: [],
  },
  components: { TableComponent },
  methods: {
    addUser(user) {
      this.$emit("add-user", user);
    },
  },
};
</script>

<style></style>
