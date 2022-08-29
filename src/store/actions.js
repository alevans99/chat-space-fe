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
  setCurrentUsers({ commit }, payload) {
    commit('setCurrentUsers', payload)
  },
  removeUserFromRoom({ commit }, payload) {
    commit('removeUserFromRoom', payload)
  },
  clearMessages({ commit }) {
    commit('clearMessages')
  },
  updateMobileUserList({ commit }, payload) {
    commit('updateMobileUserList', payload)
  },
  updateClientField({ commit }, payload) {
    commit('updateClientField', payload)
  },
  updateErrorDialog({ commit }, payload) {
    commit('updateErrorDialog', payload)
  },
  updateErrorDialogText({ commit }, payload) {
    commit('updateErrorDialogText', payload)
  },
}
