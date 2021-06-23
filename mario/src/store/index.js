import { createStore } from 'vuex'

export default createStore({
  state: {
    cookie: false,
    tndkr: false
  },
  mutations: {
    SET_COOKIE_STATUS (state, payload) {
      localStorage.setItem('tendokoreCookie', true)
      state.cookie = payload
    },
    SET_TNDKR_STATUS (state, payload) {
      state.tndkr = payload
    }
  },
  actions: {
    setCookieStatus ({ commit }, payload) {
      commit('SET_COOKIE_STATUS', payload)
    },
    setTndkrStatus ({ commit }, payload) {
      commit('SET_TNDKR_STATUS', payload)
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
    },
    getTndkrStatus: (state) => {
      return state.tndkr
    }
  }
})
