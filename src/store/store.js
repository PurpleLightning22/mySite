import {
  createStore
} from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    repos: null,
    img: require ('@/assets/images/profile-pic.jpg')
  },
  getters: {},
  actions: {
    async getRepos(context) {
      let response = await axios.get('https://api.github.com/users/PurpleLightning22/repos')
      context.commit('getRepos', response.data)
    },
    async getRezume(context) {
      let resp = await axios.get('https://api.github.com/users/PurpleLightning22/repos')
      context.commit('getRepos', resp.data)
    }
  },

  mutations: {
    getRepos(state, payload) {
      state.repos = payload;
    },
  },
})