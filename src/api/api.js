import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:9090',
})

export const createNewRoom = async(username, clientId) => {
  const { data: { newRoomName } } = await api.post('/room/create', { username, clientId })
  return newRoomName
}

export const checkRoomStatus = async(roomname) => {
  const { data: { status } } = await api.get(`/room/status/${roomname}`)
  return status
}
