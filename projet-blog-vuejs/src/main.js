import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css";

import { mapGetters , mapMutations} from "vuex";
createApp(App)
.mixin(
  // Le mixin permet de regrouper des fonctionnalités pour ne pas les repeter sur chaque composents
{ 
       computed: {
        //  Les map permettent de faire une fusion entre les fonctions du store et les methodes des composants 
        ...mapGetters(["getArticles","getIdPostEdit","getPostEdit","getIdPostDelete","getCreatePostClick","getBlogFromTitle"]),
      },
      methods: {
          ...mapMutations(["setIdPostEdit","setPostEdit","updatePost","setIdPostDelete","addPost","setCreatePostClick","setTitlePostReading"]),
      }
    }
)
.use(store)
.use(router)            
.mount('#app')
