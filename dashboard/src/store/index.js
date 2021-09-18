import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '',
    resultStatuses: [],
    scanResults: []
  },
  getters: {
    message: state => state.message,
    statusesList: state => state.resultStatuses,
    resultsList: state => state.scanResults
  },
  mutations: {
    setMessage: (state, message) => (
      state.message = message
    ),
    setStatuses: (state, statuses) => (
      state.resultStatuses = statuses
    ),
    setResults: (state, results) => (
      state.scanResults = results
    )
  },
  actions: {
    async fetchStatuses ({ commit }) {
      const response = await http.get('/statuses')
      commit('setStatuses', response.data)
    },
    addScanResult ({ commit }, scanResult) {
      http.post('/results', scanResult).then(response => {
        console.log(response.data)
        if (response.data.id) { commit('setMessage', 'The scan result was created successfully!') }
      })
        .catch(error => {
          commit('setMessage', error.response.data.error)
          console.log(error.response.data.error)
        })
    },
    async fetchScanResults ({ commit }) {
      const response = await http.get('/results')
      commit('setResults', response.data)
    }
  },
  modules: {
  }
})
