import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import { mapGetters , mapMutations} from "vuex";
createApp(App)
.mixin(
{ 
       computed: {
        ...mapGetters(["getArticles","getIdPostEdit"]),
      },
      methods: {
          ...mapMutations(["setIdPostEdit"])
      }
    }
)
.use(store)
.use(router)
.mount('#app')

