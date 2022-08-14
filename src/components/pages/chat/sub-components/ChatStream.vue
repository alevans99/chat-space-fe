<template >
  <v-container
    class="pa-12 d-flex flex-column ma-0 all-messages-container"
    style="height: 80vh; overflow-y: scroll"
    fluid
  >
    <div
      :class="`single-message-container white pa-6 my-4 align-self-${messageAlignment(
        message.sender
      )}`"
      style="max-width: 50%"
      v-for="(message, i) in messages"
      :key="`Message${i}${message.timestamp}`"
    >
      <h5 class="text-h5">{{ message.text }}</h5>
      <p class="text-subtitle-1">{{ message.sender }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'chat-stream',

  data: () => ({
    currentUser: 'userName',
    messages: [
      { text: 'This is a test', sender: 'userName', timestamp: '' },
      {
        text: 'This is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
      { text: 'This is a test', sender: 'userName', timestamp: '' },

      {
        text: 'This is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
      {
        text: 'This is the second message This is the second message This is the second messageThis is the second messageThis is the second messageThis is the second messageThis is the second messageThis is the second messageThis is the second messageThis is the second messageThis is the second messageThis is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
      {
        text: 'This is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
      { text: 'This is a test', sender: 'userName', timestamp: '' },

      { text: 'This is a test', sender: 'userName', timestamp: '' },

      {
        text: 'This is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
      { text: 'This is a test', sender: 'userName', timestamp: '' },

      {
        text: 'This is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
      {
        text: 'This is the second message',
        sender: 'otherUserName',
        timestamp: '',
      },
    ],
  }),
  computed: {},
  methods: {
    messageAlignment(messageSender) {
      return messageSender === this.currentUser ? 'end' : 'start'
    },
  },
}
</script>
<style scoped>
.single-message-container {
  border-radius: 16px;
}

.all-messages-container::-webkit-scrollbar {
  width: 12px;
}

.all-messages-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.all-messages-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
