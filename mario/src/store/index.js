import { createStore } from 'vuex'

export default createStore({
  state: {
    cookie: false
  },
  mutations: {
    SET_COOKIE_STATUS (state, payload) {
      localStorage.setItem('tendokoreCookie', true)
      state.cookie = payload
    }
  },
  actions: {
    setCookieStatus ({ commit }, payload) {
      commit('SET_COOKIE_STATUS', payload)
    }
  },
  modules: {
  },
  getters: {
    getCookieStatus: (state) => {
      const isCookie = localStorage.getItem('tendokoreCookie')
      if (isCookie) {
        return true
      }
      return state.cookie
    }
  }
})
