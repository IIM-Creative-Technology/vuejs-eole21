<template>
  <!-- <blog-component></blog-component> -->
  <div class="grandediv">
    <div class="monimage"><img v-bind:src="img" alt="" /></div>
    <div class="texte">
      <div>
        <h1>{{ title }}</h1>
      </div>
      <div>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
  <h1>vfnvrk</h1>
</template>

<script>
// import BlogComponent from "../components/BlogComponent.vue";

export default {
  name: "Blog",
  // props: {
  //   img: String,
  //   title: String,
  //   description: String,
  // },
  props: ["img", "title", "description"],
  // components: {
  //   BlogComponent,
  // },
};
</script>

<style scoped>
.grandediv {
  background-color: #f9e4b7;
  margin-left: 20px;
  margin-top: 50px;
  width: 1380px;
  height: 300px;
  border-radius: 5px;
}

.monimage {
  padding-right: 1000px;
  padding-top: 40px;
}
.texte {
  margin-top: -200px;
}
</style>
