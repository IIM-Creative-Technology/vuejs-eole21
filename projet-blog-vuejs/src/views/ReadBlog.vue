<template>
  <img :src="post.img" alt="">
  <p> {{ post.title }} </p>
  <p> {{post.corps_texte}} </p>
</template>

<script>

export default {
  mounted() {
    this.post = this.getBlogFromTitle
  },

  data(){
      return {
          post: {}
      }
  }
};
</script>

<style lang="postcss" scoped>
</style>