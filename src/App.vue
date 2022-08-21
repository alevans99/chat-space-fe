<template>
  <v-app>
    <v-main :style="mainStyle">
      <v-container fluid class="ma-0 pa-0 fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import backgroundImage from './assets/background-image.jpg'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',

  components: {},
  created() {
    this.$socket.on('connected', (client) => {
      this.setSocketConnected({ socketConnected: true, id: this.$socket.id })
    })
    this.$socket.on('join-space', ({ newUser, currentUsers }) => {
      this.setCurrentUsers({ newUser, currentUsers })
    })
    this.$socket.on('message', (message) => {
      this.addMessage({ message })
    })
    this.$socket.on('leave-space', ({ clientId }) => {
      this.removeUserFromRoom({ clientId })
    })
  },
  data: () => ({
    mainStyle: {
      backgroundImage: `linear-gradient(
      rgba(9, 47, 15, 0.2), 
      rgba(9, 47, 15, 0.2)
    ), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    },
  }),
  computed: {
    ...mapState(['messages']),
  },
  methods: {
    ...mapActions([
      'setSocketConnected',
      'setCurrentUsers',
      'addMessage',
      'removeUserFromRoom',
    ]),
  },
}
</script>
<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
