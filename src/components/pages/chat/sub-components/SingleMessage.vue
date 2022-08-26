<template >
  <div
    :class="`single-message-container my-2 my-md-4 pa-3 align-self-${messageAlignment(
      messageObject.senderId
    )}`"
  >
    <h5
      :class="`text-body-2 text-md-body-1 text-md-center text-${messageAlignment(
        messageObject.senderId
      )} font-weight-bold`"
      style="word-break: break-word"
    >
      {{ messageObject.text }}
    </h5>
    <div
      :class="`d-flex flex-column align-${messageAlignment(
        messageObject.senderId
      )} flex-wrap`"
    >
      <p
        :class="`mb-0 text-subtitle-2 text-md-subtitle-1 text-${messageAlignment(
          messageObject.senderId
        )} `"
      >
        {{ messageObject.senderName }}
      </p>
      <p :class="`mb-0 text-subtitle-2 text-md-subtitle-1 `">
        {{ formatTimestamp(messageObject.timestamp) }}
      </p>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
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
    formatTimestamp(isoDate) {
      return DateTime.fromISO(isoDate).toLocaleString(DateTime.TIME_SIMPLE)
    },
  },
}
</script>
<style scoped>
.single-message-container {
  border-radius: 16px;
  min-width: 30%;
  max-width: 50%;
  border: 2px black solid;
  background-color: white;
}

@media only screen and (max-width: 500px) {
  .single-message-container {
    min-width: 80%;
    max-width: 80%;
  }
}
</style>
