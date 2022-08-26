<template>
  <v-container class="fill-height pa-0" fluid>
    <v-row class="" style="height: 100%">
      <v-col cols="0" md="3" class="d-none d-md-block py-0">
        <UserList />
      </v-col>

      <v-col
        cols="12"
        md="9"
        class="d-flex flex-column px-4 pb-1 pb-md-4 px-md-8 pl-md-2"
      >
        <div
          style="cursor: pointer"
          class="d-flex justify-end align-center"
          @mouseover="copyIconColor = 'yellow'"
          @mouseleave="copyIconColor = 'white'"
          @click="copyRoomLink"
        >
          <h4 :class="`text-subtitle-1 text-md-h4 ${copyIconColor}--text ma-2`">
            {{ room }}
          </h4>
          <v-icon :color="copyIconColor" v-bind="iconSize"
            >mdi-content-copy</v-icon
          >
          <v-snackbar v-model="copySnackbar" timeout="1000" top right>
            Link Copied
          </v-snackbar>
        </div>
        <div
          class="d-flex align-center justify-center flex-grow-1"
          style="width: 100%; height: 1vh"
        >
          <ChatStream />
        </div>
        <div class="d-flex align-center justify-center" style="width: 100%">
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
    userListVisibility() {
      return !['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    },
    iconSize() {
      const size = {
        xs: '',
        sm: '',
        md: 'large',
        lg: 'large',
        xl: 'large',
      }[this.$vuetify.breakpoint.name]
      return size ? { [size]: true } : {}
    },
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
