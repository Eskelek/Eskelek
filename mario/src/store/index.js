import { createStore } from 'vuex'

export default createStore({
  state: {
    cookie: false,
    tndkr: false,
    releasedGames: [],
    comingSoonGames: []
  },
  mutations: {
    SET_COOKIE_STATUS (state, payload) {
      localStorage.setItem('tendokoreCookie', true)
      state.cookie = payload
    },
    SET_TNDKR_STATUS (state, payload) {
      state.tndkr = payload
    },
    SET_RELEASED_GAMES (state, payload) {
      localStorage.setItem('relGames', true)
      state.releasedGames = payload
    },
    SET_COMING_SOON_GAMES (state, payload) {
      localStorage.setItem('csGames', true)
      state.comingSoonGames = payload
    }
  },
  actions: {
    setCookieStatus ({ commit }, payload) {
      commit('SET_COOKIE_STATUS', payload)
    },
    setTndkrStatus ({ commit }, payload) {
      commit('SET_TNDKR_STATUS', payload)
    },
    setReleasedGames ({ commit }, payload) {
      commit('SET_RELEASED_GAMES', payload)
    },
    setComingSoonGames ({ commit }, payload) {
      commit('SET_COMING_SOON_GAMES', payload)
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
    getReleasedGames: (state) => {
      const isGames = localStorage.getItem('relGames')
      if (isGames) {
        return isGames
      }
      return state.releasedGames
    },
    getComingSoonGames: (state) => {
      const isGames = localStorage.getItem('csGames')
      if (isGames) {
        return isGames
      }
      return state.comingSoonGames
    },
    getTndkrStatus: (state) => {
      return state.tndkr
    }
  }
})
