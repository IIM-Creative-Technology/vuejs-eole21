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
      </div>

      <div v-if="getPostEdit != undifined" class="col-6">
        <!-- On affiche la modification du post uniquement lorsqu'il y a un article a modifier -->
        <add-or-modify-post action="edit"></add-or-modify-post>
      </div>
    </div>

    <div v-if="!getPostEdit && getCreatePostClick == true">
      <!-- Lorsqu'on click sur creer une page et qu'il n'y a pas de modofications en cours on affiche le formulaire de création -->
      <create-post></create-post>
    </div>
  </div >
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