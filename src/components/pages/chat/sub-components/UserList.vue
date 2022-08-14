<template >
  <v-container class="fill-height py-0">
    <v-row class="fill-height">
      <v-col
        cols="3"
        class="
          fill-height
          user-list-container
          d-flex
          flex-column flex-nowrap
          align-center
          pt-12
        "
      >
        <h2 class="text-h2 white--text py-12">Users Online</h2>
        <div
          v-for="(user, i) in users"
          :key="`User-${user}${i}`"
          class="user-container pb-6"
        >
          <h4 class="text-h4 white--text">{{ user }}</h4>
        </div>
      </v-col>
      <v-col cols="9" class="pa-0 ma-0"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'user-list',

  data: () => ({
    users: ['Thisisamuchlongername', 'User B'],
  }),
  computed: {},
}
</script>
<style scoped>
.user-list-container {
  background-color: rgba(0, 0, 0, 0.626);
}
@media only screen and (max-width: 1080px) {
}

@media only screen and (max-width: 800px) {
}

@media only screen and (max-width: 600px) {
}
</style>
