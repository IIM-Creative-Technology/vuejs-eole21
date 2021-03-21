<template>
  <div class="d-flex">
    <div v-on:click="createPost" class="btn">Créer une page</div>

    <div class="col-6" v-show="getCreatePostClick == false">
      <blog-component
        v-for="(item, index) in getArticles"
        :key="index"
        :article="item"
      >
      </blog-component>
      <!-- <p>bvdfbfdb</p> -->
    </div>

    <div v-if="getPostEdit != undifined" class="col-6">
      <add-or-modify-post action="edit"></add-or-modify-post>
    </div>

    <div v-if="getCreatePostClick == true">
      <create-post></create-post>
    </div>
  </div>
</template>

<script>
import BlogComponent from "../components/BlogComponent.vue";
import AddOrModifyPost from "../components/AddOrModifyPost.vue";
import CreatePost from "../components/CreatePost.vue";

export default {
  name: "PageAdmin",
  components: {
    BlogComponent,
    AddOrModifyPost,
    CreatePost,
  },
  methods: {
    createPost() {
      this.setCreatePostClick(true);
    },
  },
};
</script>

<style scoped>
</style>