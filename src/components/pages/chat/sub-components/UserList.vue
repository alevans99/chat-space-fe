<template >
  <v-card color="rgba(0, 0, 0, 0.827)" style="height: 100vh">
    <v-card-title class="d-flex flex-column align-center">
      <v-btn
        fab
        large
        top
        outlined
        color="white"
        class="d-none d-md-block mb-4"
        @click="leaveRoom"
        ><v-icon color="white">mdi-arrow-left</v-icon></v-btn
      >
      <h4 class="text-h4 white--text text-center" style="width: 100%">
        Users Online
      </h4>
    </v-card-title>

    <v-card-text>
      <div
        cols="12"
        class="d-flex flex-column flex-nowrap align-center pt-4"
        style="overflow: scroll; max-height: 70vh"
      >
        <div
          v-for="(user, i) in currentUsers"
          :key="`User-${user}${i}`"
          class="user-container pb-6 d-flex flex-nowrap"
        >
          <v-icon v-show="user.typing == true" class="typing-animation"
            >mdi-circle-medium</v-icon
          >
          <h6 class="text-h6 white--text text-center mx-2">
            {{ user.username }}
          </h6>

          <v-icon v-show="user.typing == true" class="typing-animation"
            >mdi-circle-medium</v-icon
          >
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'user-list',

  data: () => ({}),
  computed: {
    ...mapState(['currentUsers']),
  },
  methods: {
    leaveRoom() {
      router.push({ name: 'menu' })
    },
  },
}
</script>
<style scoped>
.user-list-container {
  background-color: rgba(0, 0, 0, 0.627);
}
.transparent {
  background-color: rgba(245, 245, 220, 0);
}
</style>
