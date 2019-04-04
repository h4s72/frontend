import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,

  },
  getters: {
    storeData: (state) => {
      return state.data;
    }
  },
  mutations: {
    setData: (state, data) => {
      state.data = data;
    }
  },
  actions: {
    getData: (context) => {
      context.commit('setData', {
        name: "hello",
      })
      /*
      axios.get('/api/data')
        .then(res => res.json())
        .then(json => console.log(json))
        */
    }
  }
})
