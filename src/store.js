import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    user: null,
  },
  getters: {
    storeData: (state) => {
      return state.data;
    },
    user: (state) => {
      return state.user;
    }
  },
  mutations: {
    setData: (state, data) => {
      state.data = data;
    },
    setUser: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    getData: (context) => {
      context.commit('setData', {
        name: "hello",
        body: "Let's make the world a better place"
      })
    },
    login: (context, name) => {
      //axios.get(`/api/${name}`)    //<-- Use for dist
      axios.get(`http://localhost:6722/api/${name}`)  // Use for development (npm run serve)
        .then(user => {
          context.commit('setUser', user.data)
        })
    }
  }
})
