<template>
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
    <div class="mesbuttons">
      <button class="modifier">Editer</button>
      <button class="supprimer">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComponent",
  props: {
    img: String,
    title: String,
    description: String,
  },
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
