import { DateTime } from 'luxon'
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
    const joinMessage = {
      text: `${payload.newUser.username} has joined the room.`,
      timestamp: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
      alert: true,
      type: 'join',
    }
    state.messages.push(joinMessage)
  },
  removeUserFromRoom(state, payload) {
    const userIndex = state.currentUsers.findIndex((currentUser) => {
      return currentUser.clientId === payload.clientId
    })

    if (userIndex !== -1) {
      const disconnectMessage = {
        text: `${state.currentUsers[userIndex].username} has left the room.`,
        timestamp: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
        alert: true,
        type: 'leave',
      }
      state.messages.push(disconnectMessage)
      state.currentUsers.splice(userIndex, 1)
    }
  },
  clearMessages(state) {
    state.messages = []
  },
  updateMobileUserList(state, payload) {
    state.mobileUserList = payload.mobileUserList
  },
  updateClientField(state, payload) {
    const userIndex = state.currentUsers.findIndex((user) => {
      return user.clientId === payload.clientId
    })
    if (userIndex !== -1) {
      state.currentUsers[userIndex][payload.field] = payload.value
    }
  },
  updateErrorDialog(state, payload) {
    state.errorDialog = payload.errorDialog
  },
  updateErrorDialogText(state, payload) {
    state.errorDialogText = payload.errorDialogText
  },

}
