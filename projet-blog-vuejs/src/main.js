import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css";

import { mapGetters , mapMutations} from "vuex";
createApp(App)
.mixin(
{ 
       computed: {
        ...mapGetters(["getArticles","getIdPostEdit","getPostEdit"]),
      },
      methods: {
          ...mapMutations(["setIdPostEdit","setPostEdit","updatePost"])
      }
    }
)
.use(store)
.use(router)            
.mount('#app')
