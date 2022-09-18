<template>
  <v-container class="fill-height pa-0" fluid>
    <v-row class="ma-0 ma-md-n3" style="height: 100%">
      <v-col
        cols="0"
        md="3"
        class="d-none d-md-block py-0"
        style="height: 100vh"
      >
        <UserList />
      </v-col>

      <v-col
        cols="12"
        md="9"
        class="d-flex flex-column px-4 pb-1 pb-md-4 px-md-8 pl-md-2"
      >
        <div
          style="cursor: pointer"
          class="
            d-flex
            justify-space-between justify-md-end
            align-center
            px-1 px-md-0
          "
        >
          <div class="d-flex flex-nowrap">
            <v-btn
              fab
              top
              left
              outlined
              color="white"
              class="d-md-none mx-1"
              @click="leaveRoom"
              ><v-icon v-bind="iconSize" color="white"
                >mdi-arrow-left</v-icon
              ></v-btn
            >
            <v-btn
              fab
              outlined
              color="white"
              @click="updateMobileUserList({ mobileUserList: true })"
              class="d-md-none mx-1"
            >
              <v-icon color="white" v-bind="iconSize"
                >mdi-account-multiple</v-icon
              >
            </v-btn>
          </div>
          <div
            class="d-flex justify-end"
            @mouseover="copyIconColor = 'yellow'"
            @mouseleave="copyIconColor = 'white'"
            @click="copyRoomLink"
          >
            <h4
              :class="`text-subtitle-1 text-md-h4 ${copyIconColor}--text mx-2`"
            >
              {{ room }}
            </h4>
            <v-icon :color="copyIconColor" v-bind="iconSize"
              >mdi-content-copy</v-icon
            >
          </div>
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
    <UserListDialog />
  </v-container>
</template>

<script>
import UserList from './sub-components/UserList.vue'
import UserListDialog from './sub-components/UserListDialog.vue'
import ChatStream from './sub-components/ChatStream.vue'
import MessageInput from './sub-components/MessageInput.vue'
import { mapActions, mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'chat-page',
  components: { UserList, ChatStream, MessageInput, UserListDialog },
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
    ...mapActions([
      'clearMessages',
      'updateMobileUserList',
      'updateErrorDialogText',
      'updateErrorDialog',
    ]),
    async copyRoomLink() {
      try {
        await navigator.clipboard.writeText(this.room)
        this.copySnackbar = true
      } catch (error) {
        this.updateErrorDialogText({
          errorDialogText: 'There was an error trying to copy the room code',
        })
        this.updateErrorDialog({ errorDialog: true })
      }
    },
    leaveRoom() {
      router.push({ name: 'menu' })
    },
  },
}
</script>
<style scoped>
:deep(.v-snack__content) {
  text-align: center !important;
}
</style>
