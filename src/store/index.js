import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users : []
  },
  mutations: {
    pushData: (state, data) => state.users = data,
    search : (state, searchTerm) => {
     const user =  state.users.filter((user) => user.login.includes(searchTerm)) 
     return state.users = user
    }
  },
  actions: {
    async fetchUsers({commit}) {
       const res = await axios.get('https://api.github.com/users')
       const data = await res.data
       commit('pushData', data)
    },
    searchUser({commit}, searchTerm) {
       commit('search', searchTerm)
    }
  },
  getters: {
    allUsers : (state) => state.users
  },
  modules: {
  }
})
