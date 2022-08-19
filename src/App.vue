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
import { mapActions } from 'vuex'
export default {
  name: 'App',

  components: {},
  created() {
    this.$socket.on('connected', (client) => {
      this.setSocketConnected({ socketConnected: true, id: this.$socket.id })
    })
    this.$socket.on('join-space', ({ currentUsers }) => {
      this.setCurrentUsers({ currentUsers })
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
  methods: {
    ...mapActions(['setSocketConnected', 'setCurrentUsers']),
  },
}
</script>
<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
