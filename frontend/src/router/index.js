import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Instruments from '../views/Instruments.vue'
import Instrument from '../views/Instrument.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instrument',
    name: 'Instruments',
    component: Instruments
  },
  {
    path: '/instrument/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/instrument/:id',
    name: 'Instrument',
    component: Instrument
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
