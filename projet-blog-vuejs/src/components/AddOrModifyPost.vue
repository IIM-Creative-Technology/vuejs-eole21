<template>
  <div>
    <div class="d-flex">
      <div class="col-6"> 
        <div class="form-group row">
          <label for="title" class="col-4">Titre de la page</label>
          <div class="col-8">
            <input
              v-if="action == 'add'"
              id="title"
              type="text"
              v-model="article.title"
              class="form-control"
            />
            <input
              v-else
              readonly
              class="form-control"
              id="title"
              type="text"
              v-model="article.title"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="meta_title col-4 ">Meta Titre</label>
          <div class="col-8">
            <input
              id="meta_title"
              class="form-control"
              v-model="article.meta_title"
              type="text"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="description col-4">Meta Description</label>
          <div class="col-6">
            <input
              id="description"
              class="form-control"
              v-model="article.meta_description"
              type="text"
            />
          </div>
        </div>
      </div>

      <div class="col-6"> 
        <div>
          <img
            class="rounded-circle img-thumbnail"
            id="imagePreview"
            :src="article.img"
            alt=""
          />
        </div>
        <div>
          <label for="chooseImage" class="btn col-4">Modifier l'image</label>
          <input
            v-on:change="changeImage"
            style="display: none"
            class="col-6"
            id="chooseImage"
            type="file"
          />
        </div>
      </div>
    </div>

    <div class="form-group row">
      <label for="corps_texte col-4">Corps du post</label>
      <div class="col-8">
        <textarea
          id="corps_texte"
          cols="30"
          rows="10"
          v-model="article.corps_texte"
          class="form-control"
        ></textarea>
      </div>
    </div>

    <button v-show="action == 'edit'" v-on:click="onPostEditValidated">
      Valider les modifications
    </button>
    <button v-show="action == 'add'" v-on:click="onAddPost">
      Créer la page
    </button>
  </div>
</template>

<script>
export default {
  props: {
    action: { type: String, default: () => "add" },
  },
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
    onPostEditValidated() {
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
        console.log("fichier trouvé");
        reader.readAsDataURL(file);
      }
    },
    onAddPost() {
      this.addPost(this.article);
      this.setCreatePostClick(false);
    },
  },
};
</script>

<style scoped>
</style>