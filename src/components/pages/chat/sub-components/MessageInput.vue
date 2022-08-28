<template >
  <div class="d-flex align-end" style="height: 100%; width: 100%">
    <v-textarea
      v-model="messageText"
      clearable
      no-resize
      class="white message-input mt-0"
      height="100px"
      hide-details
      outlined
      @keydown.enter.prevent="sendMessageToSocket()"
    ></v-textarea>
    <v-btn
      color="black"
      class="submit-button ml-0 ml-md-4"
      height="100px"
      :width="buttonSize"
      @click="sendMessageToSocket"
      ><v-icon color="white">mdi-send</v-icon></v-btn
    >
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { DateTime } from 'luxon'
export default {
  name: 'message-input',

  data: () => ({
    messageText: '',
    typing: false,
  }),
  computed: {
    ...mapState(['room', 'username']),
    buttonSize() {
      const size = {
        xs: '50px',
        sm: '50px',
        md: '100px',
        lg: '100px',
        xl: '100px',
      }[this.$vuetify.breakpoint.name]

      return size || '100px'
    },
  },
  watch: {
    // whenever question changes, this function will run
    messageText(newValue) {
      if (!newValue || newValue.length === 0) {
        this.typing = false
        this.$socket.emit('typing', { room: this.room, typing: false })
      } else if (this.typing === false) {
        this.typing = true
        this.$socket.emit('typing', { room: this.room, typing: true })
      }
    },
  },
  methods: {
    ...mapActions(['updateClientField']),
    sendMessageToSocket() {
      this.$socket.emit('message', {
        text: this.messageText,
        room: this.room,
        senderName: this.username,
        timestamp: DateTime.now().toISO(),
      })
      this.messageText = ''
      this.typing = false
    },
  },
}
</script>
<style scoped>
.message-input,
.submit-button {
  border-radius: 10px;
}
</style>
