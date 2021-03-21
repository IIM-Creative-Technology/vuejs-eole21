<template>
  <div v-on:click="readBlog" class=" article d-flex">
    <div class="col-3">
      <img class="img-thumbnail" v-bind:src="article.img" alt="" />
    </div>

    <div class="col-5">
      <div>
        <h1>{{ article.title }}</h1>
      </div>
      <div>
        <p>{{ article.meta_description }}</p>
      </div>
      <p>{{ article.corps_texte }}</p>
    </div>

    <div
      v-if="modif"
      class="d-flex flex-row align-items-start justify-content-center col-3"
    >
      <div v-on:click="onEdit(article)" class="btn">Editer</div>
      <div v-on:click="deletePost(article.id)" class=" btn btn-danger">x</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComponent",
  props: {
    modif: {
      type: Boolean,
      default: true,
    },
    article: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // modif: false,
      show: {
        display: "block",
      },
      hidden: {
        display: "none",
      },
    };
  },
  methods: {
    onEdit: function (article) {
      this.setPostEdit(article);
      this.setIdPostEdit(article.id);
    },
    deletePost: function (idPost) {
      this.setIdPostDelete(idPost);
    },
    readBlog (){
      if(this.modif==false){
      let titre = this.article.title.replace(" ","_")
      this.$router.push('/blog/'+titre)
      this.setTitlePostReading(titre)
      }

    }
  },
  // Methode 2 pour afficher le titre et l'image
  // props: ["img", "title", "description"],
};
</script>

<style scoped>
.article{
 border: 5px solid gray;
}
</style>
