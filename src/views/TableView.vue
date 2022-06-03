<template>
  <div class="form-view">
    <img alt="logo" src="logo.png" width="150" />
    <TableComponent />
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";

export default {
  name: "TableView",
  components: { TableComponent },
};
</script>

<style></style>
