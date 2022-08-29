<template >
  <v-dialog v-model="dialog" max-width="290" persistent>
    <v-card>
      <v-card-title class="text-h5 justify-center"> Error </v-card-title>

      <v-card-text class="text-center">{{ errorDialogText }} </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false"> Ok </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'error-dialog',
  data: () => ({}),
  computed: {
    ...mapState(['errorDialogText', 'errorDialog']),
    dialog: {
      get() {
        return this.errorDialog
      },
      set(value) {
        this.updateErrorDialog({ errorDialog: value })
      },
    },
  },
  watch: {
    messages(newMessages) {
      this.$nextTick(() => {
        this.scrollToEnd()
      })
    },
  },
  methods: {
    ...mapActions(['updateErrorDialog', 'updateErrorDialog']),
  },
  closeDialog() {
    this.updateErrorDialog({ updateErrorDialog: false })
    this.updateErrorDialogText({
      updateErrorDialogText: 'There was an unexpected error.',
    })
  },
}
</script>
<style scoped>
</style>
