import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    getData: (context) => {
      axios.get('/api/data')
        .then(res => res.json())
        .then(json => console.log(json))
    }
  }
})
