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
  setCurrentUsers(state, payload) {
    state.currentUsers = payload.currentUsers
  },
  removeUserFromRoom(state, payload) {
    const userIndex = state.currentUsers.findIndex((currentUser) => {
      return currentUser.clientId === payload.clientId
    })
    if (userIndex !== -1) {
      state.currentUsers.splice(userIndex, 1)
    }
  },

}
