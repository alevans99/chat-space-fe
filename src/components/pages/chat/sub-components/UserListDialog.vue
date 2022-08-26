<template >
  <v-dialog :value="mobileUserList" fullscreen>
    <v-card color="rgba(0, 0, 0, 0.827)">
      <v-card-actions class="d-flex justify-end">
        <v-btn
          color="rgba(0, 0, 0, 0.0)"
          height="64"
          width="64"
          class="white--text"
          @click="closeUsersDialog"
          ><v-icon color="white">mdi-close</v-icon></v-btn
        >
      </v-card-actions>
      <v-card-title>
        <h2 class="text-h2 white--text text-center" style="width: 100%">
          Users Online
        </h2>
      </v-card-title>

      <v-card-text>
        <div cols="12" class="d-flex flex-column flex-nowrap align-center pt-4">
          <div
            v-for="(user, i) in currentUsers"
            :key="`User-${user}${i}`"
            class="user-container pb-6"
          >
            <h4 class="text-h4 white--text">{{ user.username }}</h4>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'user-list-dialog',

  data: () => ({}),
  computed: {
    ...mapState(['currentUsers', 'mobileUserList']),
  },
  methods: {
    ...mapActions(['updateMobileUserList']),
    closeUsersDialog() {
      this.updateMobileUserList({ mobileUserList: false })
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
