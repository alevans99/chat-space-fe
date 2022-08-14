<template >
  <div class="d-flex mx-10 align-end" style="height: 100%">
    <v-textarea
      v-model="messageText"
      clearable
      no-resize
      height="100"
      class="white message-input mt-0"
      hide-details
      outlined
    ></v-textarea>
    <v-btn color="black" class="submit-button ml-4" height="100" width="100"
      ><v-icon color="white">mdi-send</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'message-input',

  data: () => ({
    messageText: '',
  }),
  computed: {},
  methods: {},
}
</script>
<style scoped>
.message-input,
.submit-button {
  border-radius: 10px;
}
</style>
