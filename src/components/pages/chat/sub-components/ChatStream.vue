<template >
  <div
    class="d-flex flex-column all-messages-container pa-10"
    style="height: 96%; overflow-y: scroll; width: 100%"
    ref="messagesContainer"
  >
    <div
      :class="`single-message-container white my-4 pa-4 align-self-${messageAlignment(
        message.sender
      )}`"
      style="max-width: 50%"
      v-for="(message, i) in messages"
      :key="`Message${i}${message.timestamp}`"
    >
      <h5 class="text-h5" style="word-break: break-word">{{ message.text }}</h5>
      <p class="text-subtitle-1">{{ message.sender }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'chat-stream',

  data: () => ({}),
  computed: {
    ...mapState(['messages', 'socketId']),
  },
  watch: {
    messages(newMessages) {
      this.$nextTick(() => {
        this.scrollToEnd()
      })
    },
  },
  methods: {
    messageAlignment(messageSender) {
      return messageSender === this.socketId ? 'end' : 'start'
    },

    scrollToEnd() {
      const messages = this.$refs.messagesContainer

      messages.scrollTop = 10000000
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
