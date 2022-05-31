<template>
  <div class="home">
    <img alt="logo" src="logo.png" width="150" />
    <h1>Desafío de Formularios con Vue</h1>
    <div>
      <router-link class="btn shadow button" :to="{ name: 'users' }">
        Lista de Usuarios
      </router-link>
      <router-link class="btn shadow button" :to="{ name: 'create-user' }">
        Crear Usuario
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped lang="less">
img {
  margin-bottom: 100px;
}
h1 {
  font-size: 48px;
  font-weight: bold;
}

.button {
  background-color: #6c757d;
  text-transform: uppercase;
  border: none;
  color: white;
  margin-top: 40px;

  &:hover {
    background-color: #d0dede;
    font-weight: bold;
    color: #6c757d;
    border: none;
  }
}

.button + .button {
  margin-left: 40px;
}
</style>
