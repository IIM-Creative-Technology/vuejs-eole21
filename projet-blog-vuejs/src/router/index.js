import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import PageAdmin from '../views/PageAdmin.vue'
import ReadBlog from '../views/ReadBlog.vue'

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'PageAdmin',
    component: PageAdmin
  },
  {
    path: '/blog/:title',
    name: 'ReadBlog',
    component: ReadBlog
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
