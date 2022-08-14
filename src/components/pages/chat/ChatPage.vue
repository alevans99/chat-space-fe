<template>
  <v-container class="ma-0 pa-0 fill-height">
    <UserList />
  </v-container>
</template>

<script>
import UserList from './sub-components/UserList.vue'
export default {
  name: 'chat-page',
  components: { UserList },
  data: () => ({}),
  computed: {},
}
</script>
<style scoped>
@media only screen and (max-width: 1080px) {
}

@media only screen and (max-width: 800px) {
}

@media only screen and (max-width: 600px) {
}
</style>
