<template>
  <div class="grandediv">
    <div class="monimage">
      <img class="img-thumbnail" v-bind:src="article.img" alt="" />
    </div>

    <div class="texte">
      <div>
        <h1>{{ article.title }}</h1>
      </div>
      <div>
        <p>{{ article.meta_description }}</p>
      </div>
      <p>{{ article.corps_texte }}</p>
    </div>
    <div :style="modif ? show : hidden" class="mesbuttons">
      <button v-on:click="onEdit(article)" class="modifier">Editer</button>
      <button v-on:click="deletePost(article.id)" class="supprimer">x</button>
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
  },
  // Methode 2 pour afficher le titre et l'image
  // props: ["img", "title", "description"],
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

.modifier {
  margin-left: 1100px;
  margin-right: 20px;
  width: 80px;
  height: 50px;
}
.supprimer {
  background-color: #b22222;
}
.monimage {
  padding-right: 1000px;
  padding-top: 40px;
}
.texte {
  margin-top: -200px;
}
</style>
