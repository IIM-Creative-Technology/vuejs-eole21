<template>
  <div>
    <div class="d-flex justify-content-end mr-4">
      <div v-on:click="createPost" class="btn col-3">Créer une page</div>
    </div>

    <div class="d-flex justify-content-center">
      <div
        :class="[{ 'col-6': getCreatePostClick }]"
        v-show="getCreatePostClick == false"
      >
        <blog-component
          class="m-3"
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
    </div>

    <div v-if="!getPostEdit && getCreatePostClick == true">
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