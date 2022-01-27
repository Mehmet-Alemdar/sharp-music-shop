import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchShops () {
      const request = await axios.get('/shop')
      return request.data
    },
    async fetchTypes () {
      const request = await axios.get('/instrument/types')
      return request.data
    },
    async fetchBrands () {
      const request = await axios.get('/instrument/brands')
      return request.data
    },
    async fetchCategories () {
      const request = await axios.get('/instrument/categories')
      return request.data
    },
    async fetchKinds () {
      const request = await axios.get('/instrument/kinds')
      return request.data
    },
    async fetchInstruments ({ commit, state }, playload) {
      const request = await axios.get('/instrument', { params: { filter: playload } })
      return request.data
    },
    async fetchInstrumentById ({ commit, state }, playload) {
      const request = await axios.get(`/instrument/${playload}`)
      return request.data
    },
    async fetchSearchedInstruments ({ commit, state }, playload) {
      const request = await axios.get('/instrument/search', { params: { query: playload } })
      return request.data
    }
  },
  modules: {
  }
})
