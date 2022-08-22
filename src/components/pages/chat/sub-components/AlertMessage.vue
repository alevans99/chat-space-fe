<template >
  <v-alert dense icon="mdi-chat-alert" dark :color="alertColor">
    <strong>{{ messageObject.text }}</strong>
    <p class="mb-0">{{ messageObject.timestamp }}</p>
  </v-alert>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'alert-message',
  props: {
    messageObject: Object,
  },
  data: () => ({}),
  computed: {
    ...mapState(['messages', 'clientId']),
    alertColor() {
      return this.messageObject.type === 'join' ? 'green darken-4' : 'black'
    },
  },
  watch: {},
  methods: {},
}
</script>
<style scoped>
</style>
