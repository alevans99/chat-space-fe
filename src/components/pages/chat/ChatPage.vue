<template>
  <v-container class="fill-height ma-0 pa-0" fluid>
    <v-row no-gutters class="fill-height">
      <v-col cols="3" class="pa-0 ma-0"> <UserList /> </v-col>

      <v-col cols="9" class="pa-0 ma-0">
        <div class="d-flex align-center" style="width: 100%; height: 85vh">
          <ChatStream />
        </div>
        <div class="" style="width: 100%; height: 14vh">
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
import { mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'chat-page',
  components: { UserList, ChatStream, MessageInput },
  data: () => ({}),
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
}
</script>
<style scoped>
</style>
