<template >
  <div
    :class="`single-message-container white my-2 my-md-4 pa-3 align-self-${messageAlignment(
      messageObject.senderId
    )}`"
  >
    <h5
      :class="`text-body-2 text-md-body-1 text-md-center text-${messageAlignment(
        messageObject.senderId
      )}`"
      style="word-break: break-word"
    >
      {{ messageObject.text }}
    </h5>
    <p
      :class="`mb-0 text-subtitle-2 text-md-subtitle-1 text-${messageAlignment(
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
  min-width: 30%;
  max-width: 50%;
}

@media only screen and (max-width: 500px) {
  .single-message-container {
    min-width: 80%;
    max-width: 80%;
  }
}
</style>
