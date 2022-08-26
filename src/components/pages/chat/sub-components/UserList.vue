<template >
  <v-container class="fill-height py-0">
    <v-row class="fill-height">
      <v-col class="fill-height user-list-container" cols="12">
        <div
          cols="12"
          class="d-flex flex-column flex-nowrap align-center pt-12"
        >
          <h2 class="text-h2 white--text py-12 text-center">Users Online</h2>
          <div
            v-for="(user, i) in currentUsers"
            :key="`User-${user}${i}`"
            class="user-container pb-6"
          >
            <h4 class="text-h4 white--text">{{ user.username }}</h4>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'user-list',

  data: () => ({}),
  computed: {
    ...mapState(['currentUsers']),
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
