<template >
  <div
    :class="`single-message-container white my-4 pa-4 align-self-${messageAlignment(
      messageObject.senderId
    )}`"
    style="max-width: 50%; min-width: 30%"
  >
    <h5 :class="`text-h5 text-center`" style="word-break: break-word">
      {{ messageObject.text }}
    </h5>
    <p
      :class="`text-subtitle-1 text-${messageAlignment(
        messageObject.senderId
      )}`"
    >
      {{ messageObject.senderName }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'single-message',
  props: {
    messageObject: Object,
  },
  data: () => ({}),
  computed: {
    ...mapState(['messages', 'clientId']),
  },
  watch: {},
  methods: {
    messageAlignment(senderId) {
      return senderId === this.clientId ? 'end' : 'start'
    },
  },
}
</script>
<style scoped>
.single-message-container {
  border-radius: 16px;
}
</style>
