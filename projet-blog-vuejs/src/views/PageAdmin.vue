<template>
  <div class="d-flex">
    <div class="col-6">
      <blog-component
        v-for="(item, index) in getArticles"
        :key="index"
        :article="item"
      >
      </blog-component>
      <!-- <p>bvdfbfdb</p> -->
    </div>

    <div :style="{ display: getIdPostEdit ? 'block' : 'none' }" class="col-6">
      <modify-post></modify-post>
    </div>
  </div>
</template>

<script>
import BlogComponent from "../components/BlogComponent.vue";
import ModifyPost from "../components/ModifyPost.vue";

export default {
  name: "PageAdmin",
  components: {
    BlogComponent,
    ModifyPost,
  },
};
</script>

<style scoped>
</style>