import io from 'socket.io-client'
const socket = io(process.env.VUE_APP_API_BASE_URL)
export default socket
