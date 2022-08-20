<template >
  <div class="d-flex mx-10 align-end" style="height: 100%; width: 80%">
    <v-textarea
      v-model="messageText"
      clearable
      no-resize
      height="100"
      class="white message-input mt-0"
      hide-details
      outlined
      @keydown.enter.prevent="sendMessageToSocket()"
    ></v-textarea>
    <v-btn
      color="black"
      class="submit-button ml-4"
      height="100"
      width="100"
      @click="sendMessageToSocket"
      ><v-icon color="white">mdi-send</v-icon></v-btn
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { DateTime } from 'luxon'
export default {
  name: 'message-input',

  data: () => ({
    messageText: '',
  }),
  computed: {
    ...mapState(['room', 'username']),
  },
  methods: {
    sendMessageToSocket() {
      this.$socket.emit('message', {
        text: this.messageText,
        room: this.room,
        senderName: this.username,
        timestamp: DateTime.now().toISO(),
      })
      this.messageText = ''
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
