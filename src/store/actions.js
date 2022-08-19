export default {
  setSocketConnected({ commit }, payload) {
    commit('setSocketConnected', payload)
  },
  addMessage({ commit }, payload) {
    commit('addMessage', payload)
  },
  updateRoom({ commit }, payload) {
    commit('updateRoom', payload)
  },
  updateUsername({ commit }, payload) {
    commit('updateUsername', payload)
  },
}
