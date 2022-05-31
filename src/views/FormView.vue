<template>
  <div class="form-view">
    <img alt="logo" src="logo.png" width="150" />
    <FormComponent @add-user="addUser" />
  </div>
</template>

<script>
import FormComponent from "../components/FormComponent.vue";

export default {
  name: "FormView",
  components: { FormComponent },
  methods: {
    addUser(user) {
      this.$emit("add-user", user);
    },
  },
};
</script>

<style></style>
