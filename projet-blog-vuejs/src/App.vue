<template>
  <div>
    <nav>
      <div><p>Créer le blog |</p></div>
      <div><p>Blog |</p></div>
      <div><p>Login</p></div>
      <button class="button">Créer une page</button>
    </nav>
    <page-admin></page-admin>
  </div>
</template>

<script>
import PageAdmin from "./components/PageAdmin.vue";

export default {
  name: "App",
  components: {
    PageAdmin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
}
.button {
  margin-top: 18px;
  margin-left: 1000px;
  width: 150px;
  background-color: #f9e4b7;
}
nav div p {
  padding-right: 10px;
}
</style>
