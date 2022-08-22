<template>
  <v-container class="fill-height ma-0 pa-0" fluid>
    <v-row no-gutters class="fill-height">
      <v-col cols="3" class="pa-0 ma-0"> <UserList /> </v-col>

      <v-col cols="9" class="pa-0 ma-0">
        <div
          style="height: 5vh; cursor: pointer"
          class="d-flex justify-end align-center mx-5 pt-2"
          @mouseover="copyIconColor = 'yellow'"
          @mouseleave="copyIconColor = 'white'"
          @click="copyRoomLink"
        >
          <h4 :class="`text-h4 ${copyIconColor}--text ma-2`">{{ room }}</h4>
          <v-icon :color="copyIconColor" large>mdi-content-copy</v-icon>
          <v-snackbar v-model="copySnackbar" timeout="1000" top right>
            Link Copied
          </v-snackbar>
        </div>
        <div
          class="d-flex align-center justify-center"
          style="width: 100%; height: 80vh"
        >
          <ChatStream />
        </div>
        <div
          class="d-flex align-center justify-center"
          style="width: 100%; height: 14vh"
        >
          <MessageInput />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserList from './sub-components/UserList.vue'
import ChatStream from './sub-components/ChatStream.vue'
import MessageInput from './sub-components/MessageInput.vue'
import { mapActions, mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'chat-page',
  components: { UserList, ChatStream, MessageInput },
  data: () => ({ copyIconColor: 'white', copySnackbar: false }),
  computed: {
    ...mapState(['clientId', 'username', 'room']),
  },
  created() {
    if (
      this.clientId === null ||
      this.username === null ||
      this.username === null
    ) {
      router.push({ name: 'menu' })
    }
    this.$socket.emit('join-space', {
      clientId: this.clientId,
      room: this.room,
      username: this.username,
    })
  },
  beforeDestroy() {
    this.$socket.emit('leave-space', {
      room: this.room,
      username: this.username,
    })
    this.clearMessages()
  },
  methods: {
    ...mapActions(['clearMessages']),
    async copyRoomLink() {
      try {
        await navigator.clipboard.writeText(this.room)
        this.copySnackbar = true
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
:deep(.v-snack__content) {
  text-align: center !important;
}
</style>
