import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: false,
    email: null,
    roleType: null,
    avatar: null,
  },
  mutations: {
    loginIn(state, payload) {
      state.loggedIn = true
      state.email = payload.email
      state.roleType = payload.roleType
      state.avatar = payload.avatar
    },
    loginOut(state) {
      state.loggedIn = false
      state.email = null
      state.roleType = null
      state.avatar = null
    },
  },
  actions: {
  },
  modules: {
  }
})
