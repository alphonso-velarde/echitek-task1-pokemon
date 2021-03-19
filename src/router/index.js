import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PokemonViewer from '../views/PokemonViewer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/view-pokemon/:name',
    name: 'PokemonViewer',
    component: PokemonViewer
  },
  {
    path :'*',
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
