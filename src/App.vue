<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Lista de Usuarios</router-link> |
      <router-link to="/create-user">Crear Usuario</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
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

.b-toaster.b-toaster-top-right {
  right: 15px;

  .b-toaster-slot.vue-portal-target {
    font-family: "Dosis", sans-serif;

    .toast {
      border: none;

      .toast-header {
        border: none;
        background-color: #6c757d;
        color: white;
        height: 56px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
        border-radius: 4px;

        .close {
          color: #bebebe;
          font-weight: 400;
          text-shadow: none;
          border: none;
          background-color: transparent;

          &:focus,
          &:active {
            border: none;
            outline: none;
          }
        }
      }
      .toast-body {
        display: none;
      }
    }

    .b-toast-danger {
      .toast-header {
        border-left: 4px solid red;

        &:before {
          content: url("../public/assets/danger.svg");
          height: 25px;
          margin-right: 13px;
        }
      }
    }

    .b-toast-success {
      .toast-header {
        border-left: 4px solid #9df4e2;

        &:before {
          content: url("../public/assets/success.svg");
          height: 25px;
          margin-right: 13px;
        }
      }
    }

    .b-toast-info {
      .toast-header {
        border-left: 4px solid #83aefb;

        &:before {
          content: url("../public/assets/info.svg");
          height: 25px;
          margin-right: 13px;
        }
      }
    }
  }
}
</style>
