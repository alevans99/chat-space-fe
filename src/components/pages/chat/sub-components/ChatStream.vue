<template >
  <div
    class="d-flex flex-column all-messages-container pa-10"
    style="height: 96%; overflow-y: scroll; width: 80%"
    ref="messagesContainer"
  >
    <component
      v-for="(message, i) in messages"
      :key="`message${i}${message.senderId}`"
      :is="getComponenetType(message)"
      :messageObject="message"
    ></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SingleMessage from './SingleMessage.vue'
import AlertMessage from './AlertMessage.vue'

export default {
  name: 'chat-stream',
  components: {
    SingleMessage,
    AlertMessage,
  },
  data: () => ({}),
  computed: {
    ...mapState(['messages', 'clientId']),
  },
  watch: {
    messages(newMessages) {
      this.$nextTick(() => {
        this.scrollToEnd()
      })
    },
  },
  methods: {
    getComponenetType(message) {
      return message.alert ? AlertMessage : SingleMessage
    },
    scrollToEnd() {
      const messages = this.$refs.messagesContainer

      messages.scrollTop = 10000000
    },
  },
}
</script>
<style scoped>
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
