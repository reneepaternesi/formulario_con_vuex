<template>
  <b-container class="table-container">
    <b-table striped hover :items="users"></b-table>
  </b-container>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    users: Array,
  },
};
</script>

<style scopes lag="less">
.table-container {
  margin-top: 100px;
}
</style>
