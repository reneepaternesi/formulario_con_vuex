<template>
  <div class="form-view">
    <img alt="logo" src="logo.png" width="150" />
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "../components/FormComponent.vue";

export default {
  name: "FormView",
  components: { FormComponent },
};
</script>

<style></style>
