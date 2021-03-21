<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/admin">
        <div><p>Gérez le blog |</p></div></router-link
      >

      <router-link to="/blog"
        ><div><p>Blog |</p></div></router-link
      >

      <div><p>Login</p></div>
      <router-link to="/createPost"> </router-link>
    </nav>

    <router-view />

    <!-- <page-admin></page-admin> -->
    <!-- <blog-component></blog-component> -->
  </div>
</template>

<script>
// import PageAdmin from "./views/PageAdmin.vue";
// import BlogComponent from "./components/BlogComponent.vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)

export default {
  name: "App",

  components: {
    // PageAdmin,
    // BlogComponent,
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

