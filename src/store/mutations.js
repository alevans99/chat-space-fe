export default {
  setSocketConnected(state, payload) {
    state.socketConnected = payload.socketConnected
    state.clientId = payload.id
  },
  addMessage(state, payload) {
    state.messages.push(payload.message)
  },
  updateRoom(state, payload) {
    state.room = payload.room
  },
  updateUsername(state, payload) {
    state.username = payload.username
  },
}
