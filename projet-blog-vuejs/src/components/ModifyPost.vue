<template>
  <div class="first">
    <div class="mesinputs">
      <div>
        <label for="title">Titre de la page</label>
        <input readonly id="title" type="text" v-model="article.title" />
      </div>
      <div>
        <label for="meta_title">Meta Titre</label>
        <input id="meta_title" v-model="article.meta_title" type="text" />
      </div>

      <img
        class="rounded-circle img-thumbnail"
        :src="article.img"
        :alt="article.title"
      />
      <div>
        <label for="description">Meta Description</label>
        <input
          id="description"
          v-model="article.meta_description"
          type="text"
        />
      </div>
    </div>
    <div>
      <img src="" alt="" />

      <label for="chooseImage" class="btn">Modifier l'image</label>
      <input
        v-on:change="changeImage"
        style="display: none"
        id="chooseImage"
        type="file"
      />
    </div>
  </div>
  <label for="corps_texte">Corps du post</label>
  <textarea
    id="corps_texte"
    cols="30"
    rows="10"
    v-model="article.corps_texte"
  ></textarea>
  <button v-on:click="onPostEditValidated">Valider les modifications</button>
</template>

<script>
export default {
  mounted() {
    if (this.getPostEdit) {
      this.article = Object.assign({}, this.getPostEdit);
    }
  },
  data() {
    return {
      article: {
        id: "",
        title: "",
        meta_title: "",
        meta_description: "",
        corps_texte: "",
        img: "",
      },
    };
  },
  methods: {
    onPostEditValidated: function () {
      this.updatePost(this.article);
      this.setPostEdit(undefined);
    },
    changeImage() {
      let file = document.getElementById("chooseImage").files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          this.article.img = reader.result;
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
</style>