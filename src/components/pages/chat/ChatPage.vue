<template>
  <v-row class="fill-height ma-0">
    <v-col cols="3" class="pa-0"> <UserList /> </v-col>

    <v-col cols="9">
      <v-row
        ><v-col class="pa-0" cols="12"><ChatStream /> </v-col
      ></v-row>
      <v-row><v-col cols="12"></v-col></v-row>
    </v-col>
  </v-row>
</template>

<script>
import UserList from './sub-components/UserList.vue'
import ChatStream from './sub-components/ChatStream.vue'
export default {
  name: 'chat-page',
  components: { UserList, ChatStream },
  data: () => ({}),
  computed: {},
}
</script>
<style scoped>
</style>
